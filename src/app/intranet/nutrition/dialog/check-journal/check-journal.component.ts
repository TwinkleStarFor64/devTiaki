import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { parseISO } from 'date-fns';
import { CiqualI, MenuI, PlatI } from 'src/app/intranet/partage/modeles/Types';
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

  plats: Array<PlatI> = [];
  repas: Array<MenuI> = [];
  aliment: CiqualI[] = [];

  ecart:number = 20;
  debut:number = 0;

// Dans le constructor j'utilise data - voir la doc pour les modals
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<CheckJournalComponent>,
  public menuService: MenusService  ) {}

  ngOnInit(): void {
// Le data de this.data provient de la méthode openDialog dans journal-repas.component - elle contient l'id de l'élément sur lequel j'ai cliqué et aussi son nom (title dans la BDD)
    this.selectedIdValue = this.data.selectedId; // this.selectedIdValue contient maintenant l'id de l'event calendar sur lequel j'ai cliqué
    console.log("this.selectedIdValue : ", this.selectedIdValue);
    this.selectedTitleValue = this.data.selectedTitle; // this.selectedTitleValue contient maintenant le nom (title) de l'event calendar sur lequel j'ai cliqué
    console.log("this.selectedTitleValue : ",this.selectedTitleValue);
  }

  closeDialog() { // Pour fermer la modal
    this.dialogRef.close(false);
  }
 // <--------------- FIN DE getFilteredPlatsData()-----------------------------------

  getFilteredMenusData(): any[] {
    if (!this.selectedTitleValue) {
      return [];
    }
    const filteredMenus = this.repas.filter(
      (menu) => menu.titre === this.selectedTitleValue
    );
      return filteredMenus.map((menu) => {
        return {
          nom: menu.titre,
          // alimCode: menu.alim_code,
          // ingredients: this.aliment.filter(
          //   (ingredient) => ingredient.alim_code === menu.alim_code
          // ),
        };
      });
  }

}




