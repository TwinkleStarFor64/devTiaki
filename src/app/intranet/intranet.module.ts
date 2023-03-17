import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IntranetComponent,
    AsideBarComponent,
    AccueilComponent,
  
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule
  ]
})
export class IntranetModule { }
