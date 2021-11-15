import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  // i18nSelect Pipe.

  public otroInvitado: boolean = false;

  public nombre: string = 'Paula';

  public genero: string = 'femenino';

  public mapping = {

    'masculino': 'invitarlo',

    'femenino': 'invitarla',
  };

  // i18nPlural - Slice Pipes.

  public enEspera: string[] = ['Paula', 'Catalina', 'Geralt', 'Justina', 'Gabriel'];

  public clientes: string[] = ['Paula', 'Catalina', 'Geralt', 'Justina', 'Gabriel'];

  public pluralMap = {

    '=0': 'no tenemos ningún cliente a la espera de ser atentido',

    '=1': 'tenemos un cliente esperando ser atentido',

    'other': 'tenemos # clientes esperando a ser atendidos',
  };

  cambiarInvitado (): void {

    this.otroInvitado = !this.otroInvitado;

    if (this.otroInvitado) {

      this.nombre = 'Geralt';

      this.genero = 'masculino';

    } else {

      this.nombre = 'Paula';

      this.genero = 'femenino';
    };
  };

  eliminarCliente(): void {

    this.enEspera.shift();
  };

  // KeyValue Pipe.

  public persona = {

    nombre: 'Paula',
    edad: 30,
    ciudad: 'Buenos Aires, Argentina',
  };

  // Json Pipe.

  public heroes = [

    {
      nombre: 'Goku',
      tecnica: 'Kame Hame Ha',
    },

    {
      nombre: 'Vegeta',
      tecnica: 'Resplandor Final',
    },

    {
      nombre: 'Gohan',
      tecnica: 'Kame Hame Ha',
    },
  ];

  // Async Pipe.

  public miObservable = interval(1000);

  public miPromesa = new Promise ( (resolve, reject) => {

    setTimeout( () => {

      resolve('Promesa resuelta.');

    }, 3000);
  });
};

