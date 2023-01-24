import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from 'primeng/knob';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { ExerciceKineComponent } from './kine/exercice-kine/exercice-kine.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { BottomBarKineComponent } from './components/bottom-bar-kine/bottom-bar-kine.component';
import { ProgrammeKineComponent } from './kine/programme-kine/programme-kine.component';
import { ProgressionKineComponent } from './kine/progression-kine/progression-kine.component';
import { MessagerieComponent } from './outils/messagerie/messagerie.component';
import { JournalComponent } from './outils/journal/journal.component';
import { HistoriqueComponent } from './outils/historique/historique.component';
import { ProfilComponent } from './outils/profil/profil.component';
import { ExerciceOptoComponent } from './opto/exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './opto/programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './opto/progression-opto/progression-opto.component';
import { JournalRepasComponent } from './nutrition/journal-repas/journal-repas.component';
import { IngredientsComponent } from './nutrition/ingredients/ingredients.component';
import { PlatsComponent } from './nutrition/plats/plats.component';
import { MenusComponent } from './nutrition/menus/menus.component';
import { RecettesComponent } from './nutrition/recettes/recettes.component';
import { BottomBarNutriComponent } from './components/bottom-bar-nutri/bottom-bar-nutri.component';
import { BottomBarOptoComponent } from './components/bottom-bar-opto/bottom-bar-opto.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AsideBarComponent,
    ExerciceKineComponent,
    BottomBarKineComponent,
    ProgrammeKineComponent,
    ProgressionKineComponent,
    MessagerieComponent,
    JournalComponent,
    HistoriqueComponent,
    ProfilComponent,
    ExerciceOptoComponent,
    ProgrammeOptoComponent,
    ProgressionOptoComponent,
    JournalRepasComponent,
    IngredientsComponent,
    PlatsComponent,
    MenusComponent,
    RecettesComponent,
    BottomBarNutriComponent,
    BottomBarOptoComponent,

   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KnobModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
