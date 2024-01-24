import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'  
})
export class MainPageComponent{

  

  nuevo:Personaje = {
    nombre: 'Other',
    poder: 4000
  }
  
  // get personajes():Personaje[]{
  //   return this.DBzService.personajes;
  // }

  cambiarNombre(event:any){
    console.log(event.target.value);
  }

  


  constructor (){
    
  }

}
