import { Component, OnInit } from '@angular/core';
import { ExerciceI } from '../../modeles/Types';
import { RecettesService } from './services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {


  constructor(public recettes: RecettesService) { }

  ngOnInit(): void {
    this.recettes.getRecettes();
  }

}
