import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types.js';

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

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
  }
}
