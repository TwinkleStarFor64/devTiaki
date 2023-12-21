import { Component, OnInit } from '@angular/core';
import { EvalI, MenuI } from '../../partage/modeles/Types';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';
import { InfosService } from 'src/app/partage/services/infos.service';
import { NutritionService } from '../services/nutrition.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  evaluation: EvalI[] = [];

  filtreEval: number = 2; // Filtrer par évaluations
  filtre: string = ''; // Filtrer les plats par noms

  //selectedIngredients?: CiqualI;
  selectedMenu: MenuI = {id:-1, titre:''};
  selectedEvaluation!: EvalI; // Pour le ngModel "<mat-select [(ngModel)]="selectedEvaluation">"
  selectedIngredients:Array<any> = [];

  evaluationId!: number; // Pour la méthode onSelectEval()
  evaluationStatut!: number; // Pour la méthode onSelectEval()

  alimCodeFiltre: number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
  step:number = 0;

  constructor(public nutri: NutritionService, private dialog: MatDialog, public l: InfosService) { }

  /** Récupérer la liste des plats dans la base s'ils ne sont pas encore chargés */
  ngOnInit() {
    if (this.nutri.listeMenus.length == 0) this.nutri.getMenus();
  }
  /** Initialiser un plat vide */
  initPlat() {
    this.selectedMenu = {id:-1, titre:''};
  }
  /** Sélectionner un plat */
  setPlat(menu: MenuI) {
    if (this.selectedMenu.id == menu.id) {
      this.initPlat();
    } else {
      this.selectedMenu = menu;
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
  // Modal Material Angular contenant le formulaire pour ajouter un nouveau plat
  openDialog() {
    // return this.dialog.open(SaveMenuComponent, {
    //   disableClose: true,
    //   autoFocus: true,
    //   height: '800px',
    //   width: '1000px',
    //   data: 'Ajouter un plat',
    // });
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
