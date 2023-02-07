import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRoutingModule } from './nutrition-routing.module';
import { JournalRepasComponent } from './journal-repas/journal-repas.component';
import { BottomBarNutriComponent } from 'src/app/intranet/nutrition/bottom-bar-nutri/bottom-bar-nutri.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenusComponent } from './menus/menus.component';
import { PlatsComponent } from './plats/plats.component';
import { RecettesComponent } from './recettes/recettes.component';
import { NutritionComponent } from './nutrition.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientModule } from '@angular/common/http';
import { AlimentsPipe } from '../utils/pipes/aliments.pipe';


@NgModule({
  declarations: [
    BottomBarNutriComponent,
    JournalRepasComponent,
    IngredientsComponent,
    MenusComponent,
    PlatsComponent,
    RecettesComponent,
    NutritionComponent,
    AlimentsPipe
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
    ConfirmDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
  ]
})
export class NutritionModule { }
