import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { ProgrammeOptoI } from '../../utils/modeles/Types';
import { ProgrammeOptoService } from './services/programme-opto.service';

@Component({
  selector: 'app-programme-opto',
  templateUrl: './programme-opto.component.html',
  styleUrls: ['./programme-opto.component.scss']
})
export class ProgrammeOptoComponent implements OnInit {
  control = new FormControl('');
  myProg = new FormControl<any | ProgrammeOptoI>('');
  filtre: string = '';
  selectedProgrammeOpto?: ProgrammeOptoI;
  programmesFiltres: ProgrammeOptoI[] = [];

  constructor(public programmeOpto: ProgrammeOptoService) { }

  // Récupère les données du service programmeOptoService et les enregistre grâce au subscribe
  ngOnInit(): void {
    this.programmeOpto.getProgrammeOpto().subscribe(programmes => {
      this.programmeOpto.programme = programmes;
    });
  }

//  méthode permettant de filtrer les programme lorsqu'on utilise l'input 
  filtrerProgrammes(): void {
    const controlValue = this.control.value;
    const filtre =  (typeof controlValue === 'string') ? controlValue.trim().toLowerCase() : '';

    if (filtre) {
      this.programmesFiltres = this.programmeOpto.programme.filter(
        (programme: ProgrammeOptoI) => programme.titre.toLowerCase().includes(filtre)
      );
    } else {
      this.programmesFiltres = [];
    }
  }

// methode permettant d'utiliser entrer sur le clavier
selectionnerPremierProgramme() {
  if (this.programmesFiltres.length > 0) {
    const premierProgramme = this.programmesFiltres[0];
    this.onSelectProgramme(premierProgramme);
  }
}
 
// méthode permettant la récupération des donées json via l'interface ProgrammeOptoI
 onSelectProgramme(programme: ProgrammeOptoI): void {
    this.selectedProgrammeOpto = programme;
    console.log(programme);
  }

}



