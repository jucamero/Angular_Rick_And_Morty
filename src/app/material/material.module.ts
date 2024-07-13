import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }