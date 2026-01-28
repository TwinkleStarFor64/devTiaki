import { Routes } from '@angular/router';
import { OptoComponent } from './opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';

export const optoRoutes: Routes = [
  {
    path: '', component: OptoComponent, children: [
      { path: 'progressions', component: ProgressionOptoComponent },
      { path: 'exercices', component: ExerciceOptoComponent },
      { path: 'programmes', component: ProgrammeOptoComponent }
    ]
  },

];