import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { FormacionComponent } from './app/components/formacion/formacion.component';

bootstrapApplication(FormacionComponent, appConfig)
  .catch((err) => console.error(err));
