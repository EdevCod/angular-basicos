import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'  
})
export class PersonajesComponent {
  
  //@Input('data') personajes: Personaje[]=[];

  get personajes():Personaje[]{
    return this.DBzService.personajes;
  }

  constructor(private DBzService:DBzService){
    
  }

}
