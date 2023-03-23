import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { ExerciceOptoService } from '../exercice-opto/services/exercice-opto.service';

@Component({
  selector: 'app-progression-opto',
  templateUrl: './progression-opto.component.html',
  styleUrls: ['./progression-opto.component.scss']
})
export class ProgressionOptoComponent implements OnInit {

  avatar!:string;
  

  constructor(public exerciceOpto:ExerciceOptoService) { }

  ngOnInit(): void {
   
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.exerciceOpto.getExerciceOpto();

  }
}
