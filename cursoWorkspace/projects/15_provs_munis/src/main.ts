import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PoblacionesComponent } from './app/components/poblaciones/poblaciones.component';


bootstrapApplication(PoblacionesComponent, appConfig)
  .catch((err) => console.error(err));
