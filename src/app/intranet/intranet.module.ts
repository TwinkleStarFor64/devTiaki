import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { PlatsPipe } from './utils/pipes/plats.pipe';





@NgModule({
  declarations: [
    IntranetComponent,
    AsideBarComponent,
    AccueilComponent,
    //PlatsPipe,
    
    
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule
  ]
})
export class IntranetModule { }
