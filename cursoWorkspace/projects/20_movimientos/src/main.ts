import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MovimientosComponent } from './app/components/movimientos/movimientos.component';


bootstrapApplication(MovimientosComponent, appConfig)
  .catch((err) => console.error(err));
