import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRoutingModule } from './nutrition-routing.module';
import { JournalRepasComponent } from './journal-repas/journal-repas.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenusComponent } from './menus/menus.component';
import { PlatsComponent } from './plats/plats.component';
import { RecettesComponent } from './recettes/recettes.component';
import { NutritionComponent } from './nutrition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlimentsPipe } from '../utils/pipes/aliments.pipe';
import { PlatsPipe } from '../utils/pipes/plats.pipe';
import { BottomBarNutriComponent } from './bottom-bar-nutri/bottom-bar-nutri.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { IngredientsPipe } from '../utils/pipes/ingredients.pipe';

@NgModule({
  declarations: [
    JournalRepasComponent,
    IngredientsComponent,
    MenusComponent,
    PlatsComponent,
    RecettesComponent,
    NutritionComponent,
    AlimentsPipe,
    PlatsPipe,
    IngredientsPipe,
    BottomBarNutriComponent,
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class NutritionModule {}
