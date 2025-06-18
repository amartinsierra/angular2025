import { Routes } from '@angular/router';
import { ComprasComponent } from './components/compras/compras.component';
import { LoginComponent } from './components/login/login.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path:"compras",
    component:ComprasComponent
  },
  {
    path:"catalogo",
    component:CatalogoComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];
