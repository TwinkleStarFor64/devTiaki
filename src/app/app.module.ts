import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from 'primeng/knob';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccueilComponent } from './pages/accueil/accueil.component';

import { ProgressionKineComponent } from './pages/progression-kine/progression-kine.component';
import { AsidebarComponent } from './pages/components/asidebar/asidebar.component';
import { BottomBarKineOptoComponent } from './pages/components/bottom-bar-kine-opto/bottom-bar-kine-opto.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AsidebarComponent,
    ProgressionKineComponent,
    BottomBarKineOptoComponent,
   
   

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
