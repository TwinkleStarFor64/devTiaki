import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableauComponent } from './tableau/tableau.component';
import { ButtonComponent } from './template/ui/button/button.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CustomAccordionComponent } from './template/ui/custom-accordion/custom-accordion.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';




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
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    CdkAccordionModule,
    MatProgressBarModule,
    HttpClientModule
  ],
})
export class IntranetModule {}
