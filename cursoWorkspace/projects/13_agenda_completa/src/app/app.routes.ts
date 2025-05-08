import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

export const routes: Routes = [
  {
    path:"nuevo",
    component:NuevoComponent
  },
  {
    path:"buscar",
    component:BuscarComponent
  },
  {
    path:"mostrar",
    component:MostrarComponent
  }
];
