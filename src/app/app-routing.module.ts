import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'/aside', component: AsidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
