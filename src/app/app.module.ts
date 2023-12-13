import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { InfosComponent } from './extranet/infos/infos.component';
import { MentionsLegalesComponent } from './extranet/mentions-legales/mentions-legales.component';
import { RgpdComponent } from './extranet/rgpd/rgpd.component';
import { PagenotfoundComponent } from './extranet/pagenotfound/pagenotfound.component';
import { SharedModule } from './partage/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InfosComponent,
    MentionsLegalesComponent,
    RgpdComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
