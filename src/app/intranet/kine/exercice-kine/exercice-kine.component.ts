import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { ExerciceKineService } from './services/exercice-kine.service';
import { SanityService } from 'src/app/services/sanity.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalExKineComponent } from './modal-ex-kine/modal-ex-kine.component';


@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss'],
})
export class ExerciceKineComponent implements OnInit {
  avatar!: string;
  exercicesKine!: ExerciceI[]

  constructor(public exerciceKine: ExerciceKineService, public sanity: SanityService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercices().then((data) => this.exercicesKine = data)

  }
  openDialog(exercice: ExerciceI) {
    return this.dialog.open(ModalExKineComponent, {
      disableClose: true,
      autoFocus: true,
      height: '800px',
      width: '1000px',
      data: exercice,
    });
    
  }
  
  
}
