import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptoRoutingModule } from './opto-routing.module';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';
import { ProgrammeOptoPipe } from '../partage/pipes/programme-opto.pipe';
import { SharedModule } from '../partage/shared.module';
import { CarouselOptoComponent } from './carousel-opto/carousel-opto.component';
import { OptoComponent } from './opto.component';

@NgModule({
  declarations: [
    OptoComponent,
    ExerciceOptoComponent,
    ProgrammeOptoComponent,
    ProgressionOptoComponent,
    ProgrammeOptoPipe,
    CarouselOptoComponent
  ],
  imports: [
    CommonModule,
    OptoRoutingModule,
    SharedModule
  ],
})
export class OptoModule {}
