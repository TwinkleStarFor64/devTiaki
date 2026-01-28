import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarouselKineComponent } from './kine/carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    FormsModule, ReactiveFormsModule, RouterLink,
    CarouselKineComponent, MatRadioButton,
    MatSelectModule, MatIconModule,CdkAccordionModule, MatProgressBarModule, MatDialogModule,
    MatButtonModule,MatInputModule,MatPaginatorModule, MatSelectModule, MatAutocompleteModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, RouterLink,
    CarouselKineComponent,
    MatSelectModule, MatIconModule, MatRadioButton,
    CdkAccordionModule, MatProgressBarModule, MatButtonModule, MatDialogModule,
    MatInputModule,MatPaginatorModule, MatSelectModule, MatAutocompleteModule
  ]
})
export class IntranetModule {}
