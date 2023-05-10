import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableauComponent } from './tableau/tableau.component';
import { ButtonComponent } from './template/ui/button/button.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    IntranetComponent,
    AsideBarComponent,
    AccueilComponent,
    TableauComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule

  ]
})
export class IntranetModule { }
