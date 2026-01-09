import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { IntranetModule } from '../../intranet.module';

@Component({
  selector: 'app-progression-kine',
  templateUrl: './progression-kine.component.html',
  styleUrls: ['./progression-kine.component.scss'],
  standalone: true,
  imports: [IntranetModule],

})
export class ProgressionKineComponent implements OnInit {
  avatar!: string;
  exercicesKine!: ExerciceI[];
  exercicesFiltres: ExerciceI[] = [];

  constructor(public sanity: SanityService) { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercices().then((data) => {
      this.exercicesKine = data;
      this.exercicesFiltres = [...this.exercicesKine]; // Afficher tous les exercices
    });
  }
}
