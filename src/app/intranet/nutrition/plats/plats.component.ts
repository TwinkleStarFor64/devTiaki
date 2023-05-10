import { Component, OnInit } from '@angular/core';
import { PlatsService } from './services/plats.service';
import { CiqualI, MesPlatsI } from '../../utils/modeles/Types';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.scss'],
})
export class PlatsComponent implements OnInit {
  selectedIngredients?: CiqualI;
  selectedPlats?: MesPlatsI;

  alimCodeFiltre: number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()

  constructor(public platService: PlatsService) {}

  ngOnInit(): void {
    this.platService.getMesPlats();
    this.platService.getCiqual();
  }

  onSelect(event: any, plats: MesPlatsI): void {
    // La ligne de code "if (event.isUserInput)" permet de vérifier que l'utilisateur a bien sélectionné une option
    // Cela permet d'ignorer l'événement déclenché lors de la désélection de l'option précédemment sélectionnée.
    // Sans cela la valeur de mat-option et du HTML ne se met pas à jour en temps réel
    if (event.isUserInput) {
      this.selectedPlats = plats;
      console.log(
        "J'ai cliqué sur : " + this.selectedPlats.nom + event.isUserInput
      );
      this.alimCodeFiltre = plats.alim_code;
      console.log('Je veux ce code : ' + this.alimCodeFiltre);
    }
  }
}
