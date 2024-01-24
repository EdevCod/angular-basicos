import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent  {

  
  @Input('data') nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje:  EventEmitter<Personaje> = new EventEmitter();

  constructor ( private DBzService: DBzService ){

  }

  agregar(){ 
    if (this.nuevo.nombre.trim().length===0)   {return;}    

    this.DBzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {nombre:'', poder:0};    
  }  

}
