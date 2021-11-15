import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  public nombreLower: string = 'paula';

  public nombreUpper: string = 'PAULA';

  public nombreCompleto: string = 'pAulA taBodA';

  public fecha:Date = new Date();

};