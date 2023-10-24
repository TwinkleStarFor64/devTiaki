import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types.js';
import { SanityService } from 'src/app/partage/services/sanity.service';

@Component({
  selector: 'app-progression-opto',
  templateUrl: './progression-opto.component.html',
  styleUrls: ['./progression-opto.component.scss'],
})
export class ProgressionOptoComponent implements OnInit {
  avatar!: string;
  exercicesOpto!: ExerciceI[];
  exercicesFiltres: ExerciceI[] = [];
  exoSelect!:ExerciceI;

  constructor(public sanity:SanityService) {}

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercicesOpto().then((data) => {
      this.exercicesOpto = data;
      this.exercicesFiltres = [...this.exercicesOpto]; // Afficher tous les exercices
    });
  }
}
