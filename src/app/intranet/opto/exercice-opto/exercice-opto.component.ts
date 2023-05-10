import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { ExerciceOptoService } from './services/exercice-opto.service';

@Component({
  selector: 'app-exercice-otpo',
  templateUrl: './exercice-opto.component.html',
  styleUrls: ['./exercice-opto.component.scss'],
})
export class ExerciceOptoComponent implements OnInit {
  avatar!: string;
  constructor(public exerciceOpto: ExerciceOptoService) {}

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.exerciceOpto.getExerciceOpto();
  }
}
