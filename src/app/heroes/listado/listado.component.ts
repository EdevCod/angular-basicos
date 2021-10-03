import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent{  
    public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
    public heroeBorrado:string="";
     
    borrar():void{        
        this.heroeBorrado = this.heroes.shift() || '';     
    }    
}
