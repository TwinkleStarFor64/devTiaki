import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';

const routes: Routes = [
  {path:'', component:IntranetComponent, children:[
    {path:'kine', loadChildren: () =>  import('./kine/kine.module').then( m => m.KineModule)},
    {path:'opto', loadChildren: () =>  import('./opto/opto.module').then( m => m.OptoModule)},
    {path:'nutrition', loadChildren: () =>  import('./nutrition/nutrition.module').then( m => m.NutritionModule)},
    {path:'outils', loadChildren: () =>  import('./outils/outils.module').then( m => m.OutilsModule)}
  ]}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
