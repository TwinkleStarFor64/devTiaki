import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './template/footer/footer.component';





@NgModule({
  declarations: [
    IntranetComponent,
    AsideBarComponent,
    AccueilComponent,
    FooterComponent
    
    
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule
  ]
})
export class IntranetModule { }
