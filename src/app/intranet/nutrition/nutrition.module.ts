import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRoutingModule } from './nutrition-routing.module';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenusComponent } from './menus/menus.component';
import { PlatsComponent } from './plats/plats.component';
import { NutritionComponent } from './nutrition.component';
import { AlimentsPipe, PlatsPipe, IngredientsPipe } from '../partage/pipes/nutrition.pipe';
import { SaveDataComponent } from './dialog/save-data/save-data.component';
import { DeleteDataComponent } from './dialog/delete-data/delete-data.component';
import { SavePlatComponent } from './dialog/save-plat/save-plat.component';
import { CheckJournalComponent } from './dialog/check-journal/check-journal.component';
import { SharedModule } from '../../partage/shared.module';
import { ProgrammesComponent } from './programmes/programmes.component';

@NgModule({
  declarations: [
    IngredientsComponent,
    MenusComponent,
    PlatsComponent,
    NutritionComponent,
    AlimentsPipe,
    PlatsPipe,
    IngredientsPipe,
    SaveDataComponent,
    DeleteDataComponent,
    SavePlatComponent,
    CheckJournalComponent,
    ProgrammesComponent
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    SharedModule
  ]
})
export class NutritionModule {}
