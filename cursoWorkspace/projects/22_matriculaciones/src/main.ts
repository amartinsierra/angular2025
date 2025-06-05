import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MatriculasComponent } from './app/components/matriculas/matriculas.component';


bootstrapApplication(MatriculasComponent, appConfig)
  .catch((err) => console.error(err));
