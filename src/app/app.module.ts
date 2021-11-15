import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Módulos personalizados.

import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';

import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app.

import localesAR from '@angular/common/locales/es-AR';

import localesJA from '@angular/common/locales/ja';

import {registerLocaleData} from '@angular/common';

registerLocaleData(localesAR);

registerLocaleData(localesJA);

@NgModule({

  declarations: [

    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],

  providers: [

    {provide: LOCALE_ID, useValue: 'es-AR'},
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {};
