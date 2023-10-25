import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../../journal-repas/services/event.service';
import { parseISO } from 'date-fns';
import { PlatsService } from '../../plats/services/plats.service';
import { CiqualI, MesMenusI, MesPlatsI } from 'src/app/intranet/partage/modeles/Types';
import { SupabaseService } from 'src/app/partage/services/supabase.service';
import { MenusService } from '../../menus/services/menus.service';
import { DonneesService } from 'src/app/intranet/partage/services/donnees.service';

@Component({
  selector: 'app-check-journal',
  templateUrl: './check-journal.component.html',
  styleUrls: ['./check-journal.component.scss']
})
export class CheckJournalComponent implements OnInit {

  events: any[] = [];

  selectedIdValue!: number; // Pour stocker l'id de l'event calendar dans ngOnInit
  selectedTitleValue!: string; // Pour stocker le nom (title) de l'event calendar dans ngOnInit

  plats: MesPlatsI[] = [];
  repas: MesMenusI[] = [];
  aliment: CiqualI[] = [];

// Dans le constructor j'utilise data - voir la doc pour les modals
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<CheckJournalComponent>,
  public eventService: EventService,
  public platsService: PlatsService,
  public menuService: MenusService,
  private get:DonneesService
  ) {}

  ngOnInit(): void {
    this.fetchPlats();
    this.fetchMenus();
    this.fetchEvents();
    this.fetchCiqual();

// Le data de this.data provient de la méthode openDialog dans journal-repas.component - elle contient l'id de l'élément sur lequel j'ai cliqué et aussi son nom (title dans la BDD)
    this.selectedIdValue = this.data.selectedId; // this.selectedIdValue contient maintenant l'id de l'event calendar sur lequel j'ai cliqué
    console.log("this.selectedIdValue : ", this.selectedIdValue);
    this.selectedTitleValue = this.data.selectedTitle; // this.selectedTitleValue contient maintenant le nom (title) de l'event calendar sur lequel j'ai cliqué
    console.log("this.selectedTitleValue : ",this.selectedTitleValue);
  }

  closeDialog() { // Pour fermer la modal
    this.dialogRef.close(false);
  }

  async fetchEvents() {
    const { data, error } = await this.eventService.getEvents();
    if (data) {
      this.events = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        title: item['title'],
        start: parseISO(item['start']), // J'utilise parseISO pour convertir en un objet Date valide
        color: [item['color']],
        choice: item['choice'],
        observations: item['observations'],
        cssClass: 'calendarTitle',
        //actions: this.actions
      }));
      //console.log(this.events.map((item) => item['id']));
    }
    if (error) {
      console.log(error);
    }
  }

  async fetchPlats() {
    const { data, error } = await this.platsService.getPlats();
    if (data) {
      this.plats = data.map((item: { [x:string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'],
        statut: item['statut']
      }));
    }
    if (error) {
      console.log(error);
    }
  }

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
      console.log(error);
    }
  }

  async fetchCiqual() {
    const { data: groupData, error: groupError } =
      await this.get.getCiqual();
    console.log(this.get.ciqual);
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

// Méthode pour afficher les données de la table plats & ciqual en BDD seulement si elles correspondent à selectedTitleValue
  getFilteredPlatsData(): any[] {
    if (!this.selectedTitleValue) {
      return [];
    }
//Ci-dessous sur plats (qui contient tout les plats grâce au fetch) je filtre les plats dont le nom est égale à selectedTitleValue
    const filteredPlats = this.plats.filter(
      (plat) => plat.nom === this.selectedTitleValue
    );
//Avec map je parcours le tableau filteredPlats créer au dessus pour faire un nouvel objet filteredPlats
//Ce nouveau filteredPlats contient plat.nom et plat.alim_code et ingredients qui est de type CiqualI[]
//Sur ingredient je filtre les alim_code des ingrédients qui correspondent à l'alim_code du plat
    return filteredPlats.map((plat) => {
      return {
        nom: plat.nom,
        alimCode: plat.alim_code,
        ingredients: this.aliment.filter(
          (ingredient) => ingredient.alim_code === plat.alim_code
        ),
      };
    });
        //L'objet final contient : {
        /*   nom: "Nom du plat",
             alimCode: "Code de l'aliment",
             ingredients:
                        [
                        Tableau des ingrédients associés au plat
                        {  Ingrédient 1  },
                        {  Ingrédient 2  },
                        ]
                      } */
  } // <--------------- FIN DE getFilteredPlatsData()-----------------------------------

  getFilteredMenusData(): any[] {
    if (!this.selectedTitleValue) {
      return [];
    }
    const filteredMenus = this.repas.filter(
      (menu) => menu.nom === this.selectedTitleValue
    );
      return filteredMenus.map((menu) => {
        return {
          nom: menu.nom,
          alimCode: menu.alim_code,
          ingredients: this.aliment.filter(
            (ingredient) => ingredient.alim_code === menu.alim_code
          ),
        };
      });
  }

}




