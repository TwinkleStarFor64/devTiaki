import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Component, OnInit } from '@angular/core';
import { ExerciceI } from '../../modeles/Types';
import { RecettesService } from './services/recettes.service';
import { FormControl } from '@angular/forms';
import { BottomBarNutriComponent } from '../bottom-bar-nutri/bottom-bar-nutri.component';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatAutocompleteModule, BottomBarNutriComponent],

})
export class RecettesComponent implements OnInit {
  control = new FormControl('');

  constructor(public recettes: RecettesService) { }

  ngOnInit(): void {
    this.recettes.getRecettes();
  }
}
