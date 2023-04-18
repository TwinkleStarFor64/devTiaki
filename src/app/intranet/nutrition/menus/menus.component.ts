import { Component, OnInit } from '@angular/core';
import { MenusService } from './services/menus.service';
import { CiqualI, MesMenusI } from '../../utils/modeles/Types';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})

export class MenusComponent implements OnInit {

  aliment:CiqualI[] = [];
  repas: MesMenusI[] = [];
  selectedRepas?: MesMenusI;

  alimCodeFiltre:number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()

  constructor(public menuService:MenusService, public supa:SupabaseService) { }

  async ngOnInit(): Promise<void> {
    this.menuService.getMesMenus();

    const { data, error } = await this.menuService.getRepas();
    if (data) {    
//Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
//Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.  
      this.repas = data.map((item: { [x: string]: any; }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code']
      }));
      console.log(this.repas);
    }
    if (error) {
      //Si une erreur
      console.log(error);
    };

    const { data: groupData, error: groupError } = await this.menuService.getCiqual();
    if (groupData) {
      this.aliment = groupData.map((item: { [x: string]: any; }) => ({        
        alim_code: item['alim_code'],
        alim_nom_fr:item['alim_nom_fr'],
        ['Protéines, N x 6.25 (g\/100 g)']:item['Protéines, N x 6.25 (g\/100 g)'],
        ['Glucides (g\/100 g)']:item['Glucides (g\/100 g)'],
        ['Lipides (g\/100 g)']:item['Lipides (g\/100 g)'],
        ['Sucres (g\/100 g)']:item['Sucres (g\/100 g)'],
        ["Vitamine C (mg\/100 g)"]:item["Vitamine C (mg\/100 g)"],
        ["Vitamine B1 ou Thiamine (mg\/100 g)"]:item["Vitamine B1 ou Thiamine (mg\/100 g)"],
        ["Vitamine B2 ou Riboflavine (mg\/100 g)"]:item["Vitamine B2 ou Riboflavine (mg\/100 g)"],
        ["Vitamine B3 ou PP ou Niacine (mg\/100 g)"]:item["Vitamine B3 ou PP ou Niacine (mg\/100 g)"],
        ["Vitamine B5 ou Acide pantothénique (mg\/100 g)"]:item["Vitamine B5 ou Acide pantothénique (mg\/100 g)"],
        ["Magnésium (mg\/100 g)"]:item["Magnésium (mg\/100 g)"],
        ["Potassium (mg\/100 g)"]:item["Potassium (mg\/100 g)"],
        ["Cuivre (mg\/100 g)"]:item["Cuivre (mg\/100 g)"],
        ["Manganèse (mg\/100 g)"]:item["Manganèse (mg\/100 g)"]
      }));
      console.log(this.aliment.map(item => item.alim_code));
      
    }
    if (groupError) {
      console.log(groupError);      
    }

  }



  onSelect(event:any, menus:MesMenusI): void {  
    // La ligne de code "if (event.isUserInput)" permet de vérifier que l'utilisateur a bien sélectionné une option
    // Cela permet d'ignorer l'événement déclenché lors de la désélection de l'option précédemment sélectionnée.
    // Sans cela la valeur de mat-option et du HTML ne se met pas à jour en temps réel  
    if (event.isUserInput) {    
      this.selectedRepas = menus;
      console.log("J'ai cliqué sur : " + this.selectedRepas.nom + " " + event.isUserInput);
      this.alimCodeFiltre = menus.alim_code;
      console.log("Je veux ce code : " + this.alimCodeFiltre);
    }    
  }

}


