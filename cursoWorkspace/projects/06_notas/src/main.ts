import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { NotasComponent } from './app/notas/notas.component';

bootstrapApplication(NotasComponent, appConfig)
  .catch((err) => console.error(err));
