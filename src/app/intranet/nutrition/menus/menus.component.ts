import { Component, OnInit } from '@angular/core';
import { MenusService } from './services/menus.service';
import { CiqualI, EvaluationI, MesMenusI } from '../../utils/modeles/Types';
import { SupabaseService } from 'src/app/partage/services/supabase.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SaveDataComponent } from '../dialog/save-data/save-data.component';
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';

@Component({
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.scss'],
    standalone: false
})
export class MenusComponent implements OnInit {
  aliment: CiqualI[] = [];
  repas: MesMenusI[] = [];
  evaluation: EvaluationI[] = [];

  selectedRepas?: MesMenusI; // Pour la méthode onSelect() et le ngIf "<span *ngIf="selectedRepas">"
  selectedEvaluation!: EvaluationI; // Pour le ngModel "<mat-select [(ngModel)]="selectedEvaluation">"

  selectedMenusId!: number; // Pour la méthode onSelect()
  evaluationId!: number; // Pour la méthode onSelectEval()
  evaluationStatut!: string; // Pour la méthode onSelectEval()

  alimCodeFiltre: any = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
// Ci-dessous affichageDefaut est utilisé dans le ngIf est dans la méthode triParTexte()
// Sa valeur par défaut 'allMenus' permet d'afficher tout les menus - Dans la méthode triParTexte je change sa valeur
  affichageDefaut: string = 'allMenus';

  constructor(
    public menuService: MenusService,
    public supa: SupabaseService,
    private dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    //this.menuService.getMesMenus();
    this.fetchMenus();
    this.fetchCiqual();
    this.fetchEvaluation();
  } // <----- Fin du ngOnInit()

  async fetchMenus() {
    const { data, error } = await this.menuService.getRepas();
    if (data) {
      //Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
      //Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.
      this.repas = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'],
        statut: item['statut'],
      }));
      console.log(this.repas.map((item) => item['id']));
    }
    if (error) {
      //Si une erreur
      console.log(error);
    }
  }

  async fetchCiqual() {
    const { data: groupData, error: groupError } = await this.supa.getCiqual();
    if (groupData) {
      this.aliment = groupData.map((item: { [x: string]: any }) => ({
        alim_code: item['alim_code'],
        alim_nom_fr: item['alim_nom_fr'],
        ['Protéines, N x 6.25 (g/100 g)']:
          item['Protéines, N x 6.25 (g/100 g)'],
        ['Glucides (g/100 g)']: item['Glucides (g/100 g)'],
        ['Lipides (g/100 g)']: item['Lipides (g/100 g)'],
        ['Sucres (g/100 g)']: item['Sucres (g/100 g)'],
        ['Vitamine C (mg/100 g)']: item['Vitamine C (mg/100 g)'],
        ['Vitamine B1 ou Thiamine (mg/100 g)']:
          item['Vitamine B1 ou Thiamine (mg/100 g)'],
        ['Vitamine B2 ou Riboflavine (mg/100 g)']:
          item['Vitamine B2 ou Riboflavine (mg/100 g)'],
        ['Vitamine B3 ou PP ou Niacine (mg/100 g)']:
          item['Vitamine B3 ou PP ou Niacine (mg/100 g)'],
        ['Vitamine B5 ou Acide pantothénique (mg/100 g)']:
          item['Vitamine B5 ou Acide pantothénique (mg/100 g)'],
        ['Magnésium (mg/100 g)']: item['Magnésium (mg/100 g)'],
        ['Potassium (mg/100 g)']: item['Potassium (mg/100 g)'],
        ['Cuivre (mg/100 g)']: item['Cuivre (mg/100 g)'],
        ['Manganèse (mg/100 g)']: item['Manganèse (mg/100 g)'],
      }));
      //console.log(this.aliment.map((item) => item['alim_code']).join(', '));
    }
    if (groupError) {
      console.log(groupError);
    }
  }

  // Méthode pour récupérer la table Evaluation
  async fetchEvaluation() {
    const { data, error } = await this.supa.getEvaluation();
    if (data) {
      this.evaluation = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        statut: item['statut'],
      }));
      console.log(this.evaluation.map((item) => item['statut']).join(', '));
    }
    if (error) {
      console.log(error);
    }
  }

  // Méthode pour le mat-select des menus
  onSelect(event: any, menus: MesMenusI): void {
    // La ligne de code "if (event.isUserInput)" permet de vérifier que l'utilisateur a bien sélectionné une option
    // Cela permet d'ignorer l'événement déclenché lors de la désélection de l'option précédemment sélectionnée.
    // Sans cela la valeur de mat-option et du HTML ne se met pas à jour en temps réel
    if (event.isUserInput) {
      this.selectedRepas = menus;
      console.log(
        "J'ai cliqué sur : " + this.selectedRepas.nom + ' ' + event.isUserInput
      );
      this.alimCodeFiltre = menus.alim_code;
      console.log('Je veux ce code : ' + this.alimCodeFiltre);
      this.selectedMenusId = menus.id;
      console.log("Voici l'id du menu : " + this.selectedMenusId);
    }
  }
  // Méthode pour le mat-select des evaluations
  onSelectEval(event: any, evaluation: EvaluationI): void {
    if (event.isUserInput) {
      this.evaluationId = evaluation.id;
      console.log("Voici l'id de l'eval : " + this.evaluationId);
      this.evaluationStatut = evaluation.statut;
    }
  }

  onSelectMenu(menus: MesMenusI): void {
    this.selectedRepas = menus;
    this.alimCodeFiltre = menus.alim_code;
      console.log('Je veux ce code : ' + this.alimCodeFiltre);
      this.selectedMenusId = menus.id;
      console.log("Voici l'id du plat : " + this.selectedMenusId);
  }

  // Modal Material Angular contenant le formulaire pour ajouter un nouveau menu
  openDialog() {
    return this.dialog.open(SaveDataComponent, {
      disableClose: true,
      autoFocus: true,
      height: '800px',
      width: '1000px',
      data: 'Ajouter un menu',
    });
  }

  // Modal Material Angular pour confirmer la suppression d'un menu
  deleteDialog() {
    return this.dialog.open(DeleteDataComponent, {
      disableClose: true,
      autoFocus: true,
      height: '200px',
      width: '400px',
      data: 'Êtes vous sur de vouloir supprimer ce menu ?',
    });
  }

  // Méthode pour delete un menu
  async deleteMenu(id: number) {
    this.deleteDialog() // J'appelle la modal deleteDialog
      .afterClosed()
      // subscribe() est une méthode qui permet de souscrire à un observable et de recevoir les événements qui y sont émis.
      .subscribe((res) => {
        if (res) {
          this.supa
            .deleteMenu(id) // La méthode deleteMenu de supabase.service.ts
            .then(() => {
              this.fetchMenus();
              //window.location.reload(); // Bonne solution ??
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  }

  async getMenusId(): Promise<any> {
    // Méthode sur le bouton Évaluer
    if (this.selectedMenusId) {
      console.log("Voici l'id du menu choisi :" + this.selectedMenusId);
      await this.supa.getEvaluationById(this.evaluationId); // Id dynamique pour la méthode supabase
      console.log(
        "L'id de l'évaluation que je donne au menu : " + this.evaluationId
      );
      await this.supa
        .updateEvalMenu(this.selectedMenusId, this.evaluationStatut)
        // Id dynamique pour le EQ de la méthode supabase
        // Statut dynamique pour le UPDATE de la méthode supabase
        .then(() => {
          this.fetchMenus();
        });
    } else {
      throw new Error();
    }
  }

// Méthode pour trier les plats suivant leur evaluation
  triParTexte(statut: string) { // statut va prendre la valeur texte du bouton ou je clique dans le html
    this.affichageDefaut = statut; // affichageDefaut prend comme nouvelle valeur statut
  }


}


//------------------ Ci-dessous code si j'utilise pas la méthode fetchMenus() ----------------
/* const { data, error } = await this.menuService.getRepas();
    if (data) {
      //Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
      //Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.
      this.repas = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'],
      }));
      console.log(this.repas);
    }
    if (error) {
      //Si une erreur
      console.log(error);
    } */

//------------------ Ci-dessous code si j'utilise pas la méthode fetchCiqual() ----------------
/* const { data: groupData, error: groupError } =
      await this.menuService.getCiqual();
    if (groupData) {
      this.aliment = groupData.map((item: { [x: string]: any }) => ({
        alim_code: item['alim_code'],
        alim_nom_fr: item['alim_nom_fr'],
        ['Protéines, N x 6.25 (g/100 g)']: item['Protéines, N x 6.25 (g/100 g)'],
        ['Glucides (g/100 g)']: item['Glucides (g/100 g)'],
        ['Lipides (g/100 g)']: item['Lipides (g/100 g)'],
        ['Sucres (g/100 g)']: item['Sucres (g/100 g)'],
        ['Vitamine C (mg/100 g)']: item['Vitamine C (mg/100 g)'],
        ['Vitamine B1 ou Thiamine (mg/100 g)']: item['Vitamine B1 ou Thiamine (mg/100 g)'],
        ['Vitamine B2 ou Riboflavine (mg/100 g)']: item['Vitamine B2 ou Riboflavine (mg/100 g)'],
        ['Vitamine B3 ou PP ou Niacine (mg/100 g)']: item['Vitamine B3 ou PP ou Niacine (mg/100 g)'],
        ['Vitamine B5 ou Acide pantothénique (mg/100 g)']: item['Vitamine B5 ou Acide pantothénique (mg/100 g)'],
        ['Magnésium (mg/100 g)']: item['Magnésium (mg/100 g)'],
        ['Potassium (mg/100 g)']: item['Potassium (mg/100 g)'],
        ['Cuivre (mg/100 g)']: item['Cuivre (mg/100 g)'],
        ['Manganèse (mg/100 g)']: item['Manganèse (mg/100 g)'],
      }));
      console.log(this.aliment.map((item) => item['Protéines, N x 6.25 (g/100 g)']));
    }
    if (groupError) {
      console.log(groupError);
    } */
