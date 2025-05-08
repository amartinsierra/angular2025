import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { BuscadorComponent } from './app/buscador/buscador.component';

bootstrapApplication(BuscadorComponent, appConfig)
  .catch((err) => console.error(err));
