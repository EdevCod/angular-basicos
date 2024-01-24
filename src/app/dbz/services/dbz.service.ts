import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DBzService{


    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 7500
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){
        
    }

    agregarPersonaje(Personaje: Personaje){
      this._personajes.push(Personaje);
    }

}