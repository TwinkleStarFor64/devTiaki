import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from '../intranet/template/menu/menu.component';
import { PopExerciceComponent } from '../intranet/template/pop-exercice/pop-exercice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatDatePipe, FormatDateToFrenchPipe } from '../intranet/partage/pipes/filter.pipe';
import { ExercicesPipe } from '../intranet/partage/pipes/programme.pipe';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { ArianeComponent } from '../intranet/template/ariane/ariane.component';
import { RouterModule } from '@angular/router';
import { CarrouselComponent } from '../intranet/template/carrousel/carrousel.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { NoteComponent } from '../intranet/template/note/note.component';

@NgModule({
  declarations: [
    MenuComponent,
    PopExerciceComponent,
    FormatDatePipe,
    FormatDateToFrenchPipe,
    ExercicesPipe,
    ArianeComponent,
    CarrouselComponent,
    NoteComponent
  ],
  exports:[
    MenuComponent,
    PopExerciceComponent,
    ArianeComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    CdkAccordionModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    FormatDatePipe,
    FormatDateToFrenchPipe,
    ExercicesPipe,
    CarrouselComponent,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatPaginatorModule,
    MatNativeDateModule,
    NoteComponent,
    MatTabsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatAutocompleteModule,
    // MatSelectModule,
    MatIconModule,
    // CdkAccordionModule,
    // MatProgressBarModule,
    // MatDialogModule,
    // MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    // MatRadioModule,
    // MatDatepickerModule,
    // MatButtonModule,
    MatFormFieldModule,
    MatTabsModule
  ]
})
export class SharedModule { }
