import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from 'primeng/knob';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';

import { ExerciceKineComponent } from './kine/exercice-kine/exercice-kine.component';
import { AsidebarComponent } from './pages/components/asidebar/asidebar.component';
import { BottomBarKineOptoComponent } from './pages/components/bottom-bar-kine-opto/bottom-bar-kine-opto.component';
import { ProgrammeKineComponent } from './kine/programme-kine/programme-kine.component';
import { ProgressionKineComponent } from './kine/progression-kine/progression-kine.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AsidebarComponent,
    ExerciceKineComponent,
    BottomBarKineOptoComponent,
    ProgrammeKineComponent,
    ProgressionKineComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KnobModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
