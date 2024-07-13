
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';
import { PersonajeComponent } from '../personaje/personaje.component';


@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [
    MaterialModule, 
    HttpClientModule
  ],
  providers: [RickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.scss'
})
export class ListaPersonajesComponent implements OnInit{

  listaPersonajes: any = {}

  constructor(
    private RyM: RickAndMortyService,
    private dialog: MatDialog
    ){}

  ngOnInit(): void {
   this.RyM.obtenerPersonajes().subscribe({
    next: (data: any) => {
      this.listaPersonajes = data;
      console.log(this.listaPersonajes)
    },
    error: (err: any) => {
      console.log(err);
    }
   })
  }

  siguientePagina(): void {
    if (this.listaPersonajes.info.next) {
      this.RyM.nextPage(this.listaPersonajes.info.next).subscribe({
        next: (data: any) => {
          this.listaPersonajes = data;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  paginaAnterior(): void {
    if (this.listaPersonajes.info.prev) {
      this.RyM.nextPage(this.listaPersonajes.info.prev).subscribe({
        next: (data: any) => {
          this.listaPersonajes = data;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }



  

  openDialog(id: string) {
    this.dialog.open(PersonajeComponent, {
      data: {
        id
      },
    });
  }

}


