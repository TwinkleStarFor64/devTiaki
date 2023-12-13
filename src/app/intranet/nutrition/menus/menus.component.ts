import { Component, OnInit } from '@angular/core';
import { MenusService } from './services/menus.service';
import { CiqualI, EvalI, MenuI } from '../../partage/modeles/Types';
import { MatDialog } from '@angular/material/dialog';
import { SaveDataComponent } from '../dialog/save-data/save-data.component';
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';
import { DonneesService } from '../../partage/services/donnees.service';
import { AdminService } from '../../partage/services/admin.service';
import { EditService } from '../../partage/services/edit.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  aliment: CiqualI[] = [];
  menus: Array<MenuI> = [];
  evaluation: Array<EvalI> = [];

  selectedRepas?: MenuI; // Pour la méthode onSelect() et le ngIf "<span *ngIf="selectedRepas">"
  selectedEvaluation!: EvalI; // Pour le ngModel "<mat-select [(ngModel)]="selectedEvaluation">"

  selectedMenusId!: number; // Pour la méthode onSelect()
  evaluationId!: number; // Pour la méthode onSelectEval()
  evaluationStatut!: number; // Pour la méthode onSelectEval()

  alimCodeFiltre: any = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
// Ci-dessous affichageDefaut est utilisé dans le ngIf est dans la méthode triParTexte()
// Sa valeur par défaut 'allMenus' permet d'afficher tout les menus - Dans la méthode triParTexte je change sa valeur
  affichageDefaut: number | undefined = 1;

  constructor(
    public menuService: MenusService,
    private get:DonneesService,
    private edit:EditService,
    private admin:AdminService,
    private dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    //this.menuService.getMesMenus();
    this.fetchMenus();
    this.fetchEvaluation();
  } // <----- Fin du ngOnInit()

  async fetchMenus() {
    const { data, error } = await this.menuService.getRepas();
    if (data) {
      console.log(this.menus);
      //Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
      //Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.
      this.menus = data as Array<MenuI>;
    }
    if (error) {
      //Si une erreur
      console.log(error);
    }
  }
  // Méthode pour récupérer la table Evaluation
  async fetchEvaluation() {
    const { data, error } = await this.get.getEvaluation();
    if (data) {
      this.evaluation = data.map((item:any) => ({
        id: item['id'],
        aidant:item['aidant'],
        statut: item['statut'],
        etoiles:item['etoiles'],
        date:item['date']
      }));
      console.log(this.evaluation.map((item) => item['statut']).join(', '));
    }
    if (error) {
      console.log(error);
    }
  }

  // Méthode pour le mat-select des menus
  onSelect(event: any, menus: MenuI): void {
    // La ligne de code "if (event.isUserInput)" permet de vérifier que l'utilisateur a bien sélectionné une option
    // Cela permet d'ignorer l'événement déclenché lors de la désélection de l'option précédemment sélectionnée.
    // Sans cela la valeur de mat-option et du HTML ne se met pas à jour en temps réel
    if (event.isUserInput) {
      this.selectedRepas = menus;
      console.log(
        "J'ai cliqué sur : " + this.selectedRepas.titre + ' ' + event.isUserInput
      );
      console.log('Je veux ce code : ' + this.alimCodeFiltre);
      this.selectedMenusId = menus.id;
      console.log("Voici l'id du menu : " + this.selectedMenusId);
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

  onSelectMenu(menus: MenuI): void {
    this.selectedRepas = menus;
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
          this.admin
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
    // if (this.selectedMenusId) {
    //   console.log("Voici l'id du menu choisi :" + this.selectedMenusId);
    //   await this.get.getEvaluationById(this.evaluationId); // Id dynamique pour la méthode supabase
    //   console.log(
    //     "L'id de l'évaluation que je donne au menu : " + this.evaluationId
    //   );
    //   await this.edit.updateEvalMenu(this.selectedMenusId, this.evaluationStatut)
    //     .then(() => {
    //       this.fetchMenus();
    //     });
    // } else {
    //   throw new Error();
    // }
  }
// Méthode pour trier les plats suivant leur evaluation
  triParTexte(statut?: number ) { // statut va prendre la valeur texte du bouton ou je clique dans le html
    this.affichageDefaut = statut; // affichageDefaut prend comme nouvelle valeur statut
  }
}
