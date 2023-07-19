import { Injectable, NgModule } from '@angular/core';
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
import { SaveDataComponent } from './dialog/save-data/save-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DeleteDataComponent } from './dialog/delete-data/delete-data.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SavePlatComponent } from './dialog/save-plat/save-plat.component';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CalendarDateFormatter, CalendarModule, CalendarNativeDateFormatter, DateAdapter, DateFormatterParams } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatCheckboxModule} from '@angular/material/checkbox';

registerLocaleData(localeFr, 'fr'); // Pour Angular Calendar - Utilisation du format Français

@Injectable() // Pour l'erreur de dépréciation
// Pour Angular Calendar - Modification du format date et heure en Français
class CustomDateFormatter extends CalendarNativeDateFormatter {

  public override dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {hour: 'numeric', minute: 'numeric'}).format(date);
  }

  public override weekViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {hour: 'numeric', minute: 'numeric'}).format(date);
  }
}



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
    SaveDataComponent,
    DeleteDataComponent,
    SavePlatComponent,    
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    MatOptionModule,
    MatPaginatorModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }), // Angular Calendar 
    MatCheckboxModule       
  ],
  providers: [
    {provide: CalendarDateFormatter, useClass: CustomDateFormatter} // Angular Calendar - J'intégre la classe définie au dessus
  ]  
})
export class NutritionModule {}
