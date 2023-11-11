import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableauComponent } from './tableau/tableau.component';
import { ButtonComponent } from './template/ui/button/button.component';
import { CustomAccordionComponent } from './template/ui/custom-accordion/custom-accordion.component';
import { SharedModule } from './partage/shared.module';

@NgModule({
  declarations: [
    IntranetComponent,
    AsideBarComponent,
    AccueilComponent,
    TableauComponent,
    ButtonComponent,
    CustomAccordionComponent,
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    SharedModule
  ],
})
export class IntranetModule {}
