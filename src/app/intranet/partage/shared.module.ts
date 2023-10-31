import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from '../template/menu/menu.component';
import { PopExerciceComponent } from '../template/pop-exercice/pop-exercice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormatDatePipe, FormatDateToFrenchPipe } from './pipes/filter.pipe';
import { ExercicesPipe } from './pipes/programme.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    MenuComponent,
    PopExerciceComponent,
    FormatDatePipe,
    FormatDateToFrenchPipe,
    ExercicesPipe
  ],
  exports:[
    MenuComponent,
    PopExerciceComponent,
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
    MatFormFieldModule,
    MatCheckboxModule,
    FormatDatePipe,
    FormatDateToFrenchPipe,
    ExercicesPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    CdkAccordionModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }
