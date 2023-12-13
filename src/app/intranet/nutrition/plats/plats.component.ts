import { Component, OnInit } from '@angular/core';
import { CiqualI, EvalI, PlatI } from '../../partage/modeles/Types';
import { MatDialog } from '@angular/material/dialog';
import { SavePlatComponent } from '../dialog/save-plat/save-plat.component';
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';
import { NutritionService } from '../services/nutrition.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.scss'],
})
export class PlatsComponent implements OnInit {
  aliment: CiqualI[] = [];
  plats: Array<PlatI> = [];
  evaluation: EvalI[] = [];

  //selectedIngredients?: CiqualI;
  selectedPlats?: PlatI;
  selectedEvaluation!: EvalI; // Pour le ngModel "<mat-select [(ngModel)]="selectedEvaluation">"

  selectedPlatsId!: number; // Pour la méthode onSelect()
  evaluationId!: number; // Pour la méthode onSelectEval()
  evaluationStatut!: number; // Pour la méthode onSelectEval()

  alimCodeFiltre: number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
  affichageDefaut: number | null = 1;

  constructor(public nutri:NutritionService, private dialog:MatDialog) {}

  async ngOnInit() {}

  onSelect(event: any, plats: PlatI): void {
    // La ligne de code "if (event.isUserInput)" permet de vérifier que l'utilisateur a bien sélectionné une option
    // Cela permet d'ignorer l'événement déclenché lors de la désélection de l'option précédemment sélectionnée.
    // Sans cela la valeur de mat-option et du HTML ne se met pas à jour en temps réel
    if (event.isUserInput) {
      this.selectedPlats = plats;
      console.log("J'ai cliqué sur : " + this.selectedPlats.nom + event.isUserInput);
      // this.alimCodeFiltre = Number(plats.alim_code);
      console.log('Je veux ce code : ' + this.alimCodeFiltre);
      this.selectedPlatsId = Number(plats.id);
      console.log("Voici l'id du plat : " + this.selectedPlatsId);
    }
  }

// Méthode pour le mat-select des evaluations
onSelectEval(event: any, evaluation: EvalI): void {
  if (event.isUserInput) {
    this.evaluationId = evaluation.id;
    console.log("Voici l'id de l'eval : " + this.evaluationId);
    this.evaluationStatut = evaluation.statut!;
  }
}

onSelectPlat(plats: PlatI): void {
  this.selectedPlats = plats;
  // this.alimCodeFiltre = Number(plats.alim_code);
    console.log('Je veux ce code : ' + this.alimCodeFiltre);
    this.selectedPlatsId = Number(plats.id);
    console.log("Voici l'id du plat : " + this.selectedPlatsId);
}

  // Modal Material Angular contenant le formulaire pour ajouter un nouveau plat
  openDialog() {
    return this.dialog.open(SavePlatComponent, {
      disableClose: true,
      autoFocus: true,
      height: '800px',
      width: '1000px',
      data: 'Ajouter un plat',
    });
  }

  // Modal Material Angular pour confirmer la suppression d'un menu
  deleteDialog() {
    return this.dialog.open(DeleteDataComponent, {
      disableClose: true,
      autoFocus: true,
      height: '200px',
      width: '400px',
      data: 'Êtes vous sur de vouloir supprimer ce plat ?',
    });
  }

// Méthode pour trier les plats suivant leur evaluation (Voir aussi menu.components)
  triParTexte(statut: number | null) { // statut va prendre la valeur texte du bouton ou je clique dans le html
    this.affichageDefaut = statut; // affichageDefaut prend comme nouvelle valeur statut
  }

}
