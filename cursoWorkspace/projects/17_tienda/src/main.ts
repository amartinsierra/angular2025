import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TiendaBuscarComponent } from './app/components/tienda-buscar/tienda-buscar.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
