import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { ExerciceKineService } from './services/exercice-kine.service';
import { SanityService } from 'src/app/services/sanity.service';


@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss'],
})
export class ExerciceKineComponent implements OnInit {
  avatar!: string;
  exercicesKine!: ExerciceI[]

  constructor(public exerciceKine: ExerciceKineService, public sanity: SanityService) { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercices().then((data) => this.exercicesKine = data)
  }
}
