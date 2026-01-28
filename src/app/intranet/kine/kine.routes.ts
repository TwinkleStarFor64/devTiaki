import { Routes } from '@angular/router';
import { KineComponent } from './kine.component';
import { ProgressionKineComponent } from './progression-kine/progression-kine.component';
import { ProgrammeKineComponent } from './programme-kine/programme-kine.component';
import { ExerciceKineComponent } from './exercice-kine/exercice-kine.component';

export const kineRoutes: Routes = [
  {
    path: '', component: KineComponent, children: [
      { path: 'progressions', component: ProgressionKineComponent },
      { path: 'programmes', component: ProgrammeKineComponent },
      { path: 'exercices', component: ExerciceKineComponent }
    ]
  }
];