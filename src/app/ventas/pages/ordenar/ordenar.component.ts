import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [

    `
      img {

        max-width: 60px;
      }
    `
  ]
})
export class OrdenarComponent {

  public nombre: string = 'geralt';

  public enMayuscula: boolean = false;

  public ascendente: boolean = true;

  public ordenarPor = '';

  public heroes: Heroes[] = [

    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
      escudo: '../../../../assets/img/superman.png',
    },

    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
      escudo: '../../../../assets/img/linterna.png',
    },

    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
      escudo: '../../../../assets/img/batman.png',
    },

    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo,
      escudo: '../../../../assets/img/flash.png',
    },

  ];

  toggleMayuscula () {

    this.enMayuscula = !this.enMayuscula;
  };

  cambiarOrden (valor: string) {

    this.ordenarPor = valor;

    this.ascendente = !this.ascendente;
  };
};