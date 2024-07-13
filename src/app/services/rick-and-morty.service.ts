import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private UrlBase = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  obtenerPersonajes(){
    return this.http.get(`${this.UrlBase}/character`)
  }

  nextPage(nextUrl: string){
    return this.http.get(`${nextUrl}`)
  }

  obtenerUnPersonaje(id: string){
    return this.http.get(`${this.UrlBase}/character/${id}`)
  }

}