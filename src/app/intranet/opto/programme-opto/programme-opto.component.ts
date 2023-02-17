import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProgrammeOptoI } from '../../utils/modeles/Types';
import { ProgrammeOptoService } from './services/programme-opto.service';

@Component({
  selector: 'app-programme-opto',
  templateUrl: './programme-opto.component.html',
  styleUrls: ['./programme-opto.component.scss']
})
export class ProgrammeOptoComponent implements OnInit {
  formGroup!: FormGroup
  myProg = new FormControl<string | ProgrammeOptoI>('');
  filtre:string = ''; //Ce qui va servir à filtrer le tableau des programmes- utiliser dans ngModel
  ecart:number = 8; //L'écart de la pagination
  debut:number = 1; //Le début de la pagination
  selectedProgrammeOpto?:ProgrammeOptoI;

  constructor(public programmeOpto:ProgrammeOptoService) { }

  ngOnInit(): any {
    this.programmeOpto.getProgrammeOpto();
  }

  onSelect(tutoriel:ProgrammeOptoI): void {
    console.log(this.selectedProgrammeOpto = tutoriel);
    //console.log(this.selectedIngredient = miam.alim_nom_fr);
    this.selectedProgrammeOpto = tutoriel;   
  }
  
  displayFn(prog: ProgrammeOptoI): string {
    return prog && prog.titre ? prog.titre : '';
  }
  


}
