import { Component, OnInit, inject } from '@angular/core';
import { ExerciceI } from '../../utils/modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { BottomBarOptoComponent } from "../bottom-bar-opto/bottom-bar-opto.component";
import { IntranetModule } from '../../intranet.module';

@Component({selector: 'app-progression-opto',
  templateUrl: './progression-opto.component.html',
  styleUrls: ['./progression-opto.component.scss'],
  imports: [IntranetModule, BottomBarOptoComponent],
  standalone: true})
export class ProgressionOptoComponent implements OnInit {
  avatar!: string;
  exercicesOpto!: ExerciceI[];
  exercicesFiltres: ExerciceI[] = [];

  sanity:SanityService = inject(SanityService);

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercicesOpto().then((data) => {
      this.exercicesOpto = data;
      this.exercicesFiltres = [...this.exercicesOpto]; // Afficher tous les exercices
    });
  }
}
