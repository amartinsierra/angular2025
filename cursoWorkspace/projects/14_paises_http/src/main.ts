import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaisesComponent } from './app/components/paises/paises.component';


bootstrapApplication(PaisesComponent, appConfig)
  .catch((err) => console.error(err));
