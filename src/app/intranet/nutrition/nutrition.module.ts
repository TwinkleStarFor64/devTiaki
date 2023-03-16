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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlimentsPipe } from '../utils/pipes/aliments.pipe';
import { PlatsPipe } from '../utils/pipes/plats.pipe';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [
    BottomBarNutriComponent,
    JournalRepasComponent,
    IngredientsComponent,
    MenusComponent,
    PlatsComponent,
    RecettesComponent,
    NutritionComponent,
    AlimentsPipe,
    PlatsPipe,
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ]
})
export class NutritionModule { }
