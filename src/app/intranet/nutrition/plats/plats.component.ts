import { Component, OnInit } from '@angular/core';
import { PlatsService } from './services/plats.service';
import { CiqualI, EvaluationI, MesPlatsI } from '../../utils/modeles/Types';
import { SupabaseService } from 'src/app/services/supabase.service';
import { MatDialog } from '@angular/material/dialog';
import { SavePlatComponent } from '../dialog/save-plat/save-plat.component';
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.scss'],
})
export class PlatsComponent implements OnInit {
  aliment: CiqualI[] = [];
  plats: MesPlatsI [] = [];
  evaluation: EvaluationI[] = [];

  //selectedIngredients?: CiqualI;
  selectedPlats?: MesPlatsI;
  selectedEvaluation!: EvaluationI; // Pour le ngModel "<mat-select [(ngModel)]="selectedEvaluation">"

  selectedPlatsId!: number; // Pour la méthode onSelect()
  evaluationId!: number; // Pour la méthode onSelectEval()
  evaluationStatut!: string; // Pour la méthode onSelectEval() 

  alimCodeFiltre: number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
  affichageDefaut: string = 'allPlats';

  constructor(public platService: PlatsService, public supa: SupabaseService, private dialog:MatDialog) {}

  async ngOnInit(): Promise<void> {
    this.platService.getMesPlats();
    //this.platService.getCiqual();
    this.fetchPlats();
    this.fetchCiqual();
    this.fetchEvaluation();   
  }

  async fetchPlats() {
    const { data, error } = await this.platService.getPlats();
    if (data) {
      //Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
      //Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.
      this.plats = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'], 
        statut: item['statut']       
      }));
      console.log(this.plats.map((item) => item['id']));           
    }
    if (error) {
      //Si une erreur
      console.log(error);
    }
  }

  async fetchCiqual() {
    const { data: groupData, error: groupError } =
      await this.supa.getCiqual();
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
        statut: item['statut']
      }));    
      console.log(this.evaluation.map((item) => item['statut']).join(', '));      
    }
    if (error) {
      console.log(error);      
    }
  }

  onSelect(event: any, plats: MesPlatsI): void {
    // La ligne de code "if (event.isUserInput)" permet de vérifier que l'utilisateur a bien sélectionné une option
    // Cela permet d'ignorer l'événement déclenché lors de la désélection de l'option précédemment sélectionnée.
    // Sans cela la valeur de mat-option et du HTML ne se met pas à jour en temps réel
    if (event.isUserInput) {
      this.selectedPlats = plats;
      console.log("J'ai cliqué sur : " + this.selectedPlats.nom + event.isUserInput);
      this.alimCodeFiltre = plats.alim_code;
      console.log('Je veux ce code : ' + this.alimCodeFiltre);
      this.selectedPlatsId = plats.id;
      console.log("Voici l'id du plat : " + this.selectedPlatsId); 
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

onSelectPlat(plats: MesPlatsI): void {
  this.selectedPlats = plats;
  this.alimCodeFiltre = plats.alim_code;
    console.log('Je veux ce code : ' + this.alimCodeFiltre);
    this.selectedPlatsId = plats.id;
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

  // Méthode pour delete un plat
  async deletePlat(id: number) {
    this.deleteDialog() // J'appelle la modal deleteDialog
    .afterClosed()
    // subscribe() est une méthode qui permet de souscrire à un observable et de recevoir les événements qui y sont émis.
    .subscribe((res) => {
      if (res) {
        this.supa.deletePlat(id) // La méthode deleteMenu de supabase.service.ts
          .then(() => {
            this.fetchPlats();
            //window.location.reload(); // Bonne solution ??
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  async getPlatsId(): Promise<any> { // Méthode sur le bouton Évaluer
    if (this.selectedPlatsId ) {
      console.log("Voici l'id du plat choisi :" + this.selectedPlatsId );
      await this.supa.getEvaluationById(this.evaluationId) // Id dynamique pour la méthode supabase
      console.log("L'id de l'évaluation que je donne au plat : " + this.evaluationId);        
      await this.supa.updateEvalPlat(this.selectedPlatsId, this.evaluationStatut)
      // Id dynamique pour le EQ de la méthode supabase
      // Statut dynamique pour le UPDATE de la méthode supabase
      .then(() => {
        this.fetchPlats();        
      })        
    } else {
      throw new Error
    }
  }  

// Méthode pour trier les plats suivant leur evaluation (Voir aussi menu.components)  
  triParTexte(statut: string) { // statut va prendre la valeur texte du bouton ou je clique dans le html
    this.affichageDefaut = statut; // affichageDefaut prend comme nouvelle valeur statut
  }
  



}






/* ----------------- Ancienne méthode de trie suivant les évaluations ------------------------ */
//triActif: boolean = true; // Pour la méthode triParTexte
//dernierTri: string = ''; // Pour la méthode triParTexte

// Méthode utilisé sur les 3 boutons d'évaluation des plats lorsque je clique dessus
// J'utilse le texte contenu dans les boutons afin des les trier
/* triParTexte(texte: string) { // Le paramétre texte prends sa valeur dans le code html
  // Si triActif et false que dernierTri contient le texte du bouton la fonction s'arrête
  if (!this.triActif && this.dernierTri === texte) {
    return; // Quitte la fonction si le même bouton est cliqué à nouveau
  }

  this.dernierTri = texte; // La variable dernierTri prends la valeur du bouton sur lequel j'ai cliquer
  this.triActif = false; // triActif est true par défaut et deviens false après le clic
  // Ci-dessous j'utilise sort() sur l'interface mesPlatsI
  this.plats.sort((a, b) => {
    if (a.statut === texte) { // Si mesPlatsI.statut et = au texte du bouton
      return -1; // Je renvoie -1 pour le placer en premier
    } else {
      return 0; // Sinon je renvoie 0 pour conserver l'ordre actuel des éléments
    }
  });
} */