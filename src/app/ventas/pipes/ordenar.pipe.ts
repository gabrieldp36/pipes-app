import { Pipe, PipeTransform } from '@angular/core';

import { Heroes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroes[], ordenarPor: string = 'sin valor', ascendente: boolean = false): Heroes[] {

    switch (ordenarPor) {

      case 'nombre':

        return (!ascendente) 
                  ? heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 ) 
                  : heroes.sort( (a,b) => (a.nombre > b.nombre) ? -1 : 1 ); 

      case 'vuela':

        return (!ascendente) 
                  ? heroes.sort( (a,b) => (a.vuela > b.vuela) ? 1 : -1 )
                  : heroes.sort( (a,b) => (a.vuela > b.vuela) ? -1 : 1 )

      case 'color':

        return (!ascendente) 
                  ? heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1 )
                  : heroes.sort( (a,b) => (a.color > b.color) ? -1 : 1 )
                  
      default:
       
        return heroes;
    };
  };
};
