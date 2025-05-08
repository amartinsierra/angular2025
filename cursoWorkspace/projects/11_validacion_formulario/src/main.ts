import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ClientesComponent } from './app/clientes/clientes.component';


bootstrapApplication(ClientesComponent, appConfig)
  .catch((err) => console.error(err));
