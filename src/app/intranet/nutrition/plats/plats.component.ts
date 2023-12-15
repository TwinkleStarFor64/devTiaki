import { Component, OnInit } from '@angular/core';
import { CiqualI, EvalI, PlatI } from '../../partage/modeles/Types';
import { MatDialog } from '@angular/material/dialog';
import { SavePlatComponent } from '../dialog/save-plat/save-plat.component';
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';
import { NutritionService } from '../services/nutrition.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.scss'],
})
export class PlatsComponent implements OnInit {
  evaluation: EvalI[] = [];

  filtreEval: number = 2; // Filtrer par évaluations
  filtre: string = ''; // Filtrer les plats par noms

  //selectedIngredients?: CiqualI;
  selectedPlat: PlatI = { id: -1, titre: '', ingredients: [] };
  selectedEvaluation!: EvalI; // Pour le ngModel "<mat-select [(ngModel)]="selectedEvaluation">"
  selectedIngredients:Array<CiqualI> = [];

  evaluationId!: number; // Pour la méthode onSelectEval()
  evaluationStatut!: number; // Pour la méthode onSelectEval()

  alimCodeFiltre: number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
  step:number = 0;

  constructor(public nutri: NutritionService, private dialog: MatDialog, public l: InfosService) { }

  /** Récupérer la liste des plats dans la base s'ils ne sont pas encore chargés */
  ngOnInit() {
    if (this.nutri.listePlats.length == 0) this.nutri.getPlats();
  }
  /** Initialiser un plat vide */
  initPlat() {
    this.selectedPlat = { id: -1, titre: '', ingredients: [] };
    this.selectedIngredients = [];
  }
  /** Sélectionner un plat */
  setPlat(plat: PlatI) {
    if (this.selectedPlat.id == plat.id) {
      this.initPlat();
    } else {
      this.selectedPlat = plat;
      this.setIngredients();
    }
  }
  /** obtenir la liste des événements en fonction du plat choisi */
  setIngredients(){
    this.selectedIngredients = this.nutri.ciqual.filter(ing => this.selectedPlat.ingredients.includes(String(ing.alim_code)))
  }
  // Méthode pour le mat-select des evaluations
  onSelectEval(event: any, evaluation: EvalI): void {
    if (event.isUserInput) {
      this.evaluationId = evaluation.id;
      console.log("Voici l'id de l'eval : " + this.evaluationId);
      this.evaluationStatut = evaluation.statut!;
    }
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

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
