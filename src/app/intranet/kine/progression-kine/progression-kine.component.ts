import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/partage/modeles/Types';
import { KineService } from '../services/kine.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-progression-kine',
  templateUrl: './progression-kine.component.html',
  styleUrls: ['./progression-kine.component.scss'],
})
export class ProgressionKineComponent implements OnInit {
  avatar!: string;
  exercicesKine!: ExerciceI[];
  listeExosFiltres: ExerciceI[] = [];

  exoSelect!:ExerciceI; // Exercice sélectionné

  constructor(public kine:KineService, public l:InfosService) {}

  ngOnInit(): void {
    // Récupérer la liste des exercices
    if(this.kine.listeExos.length == 0) this.kine.getExercices();
  }
}
