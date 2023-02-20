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
  filtre:string = '';
  ecart:number = 8;
  debut:number = 1;
  selectedProgrammeOpto?:ProgrammeOptoI;

  constructor(public programmeOpto:ProgrammeOptoService) { }

  ngOnInit(): void {
    this.programmeOpto.getProgrammeOpto().subscribe(programmes => {
      this.programmeOpto.programme = programmes;
    });
  }

  onSelectProgramme(programme: ProgrammeOptoI): void {
    this.selectedProgrammeOpto = programme;
  } 
 }

