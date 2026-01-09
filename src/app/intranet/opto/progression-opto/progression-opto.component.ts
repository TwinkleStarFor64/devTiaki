import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { ExerciceOptoService } from '../exercice-opto/services/exercice-opto.service';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { BottomBarOptoComponent } from "../bottom-bar-opto/bottom-bar-opto.component";

@Component({
  selector: 'app-progression-opto',
  templateUrl: './progression-opto.component.html',
  styleUrls: ['./progression-opto.component.scss'],
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatProgressBarModule, BottomBarOptoComponent],

})
export class ProgressionOptoComponent implements OnInit {
  avatar!: string;
  exercicesOpto!: ExerciceI[];
  exercicesFiltres: ExerciceI[] = [];


  constructor(public sanity: SanityService) { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercicesOpto().then((data) => {
      this.exercicesOpto = data;
      this.exercicesFiltres = [...this.exercicesOpto]; // Afficher tous les exercices
    });
  }
}
