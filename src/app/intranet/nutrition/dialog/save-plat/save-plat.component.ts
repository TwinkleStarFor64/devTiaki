import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/partage/services/supabase.service';
import { PlatsService } from '../../plats/services/plats.service';
import { MesPlatsI } from '../../../utils/modeles/Types';
import { AlimentsPipe } from '../../../utils/pipes/filter.pipe';

@Component({
  selector: 'app-save-plat',
  templateUrl: './save-plat.component.html',
  styleUrls: ['./save-plat.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatAutocompleteModule, AlimentsPipe, MatDialogModule],

})
export class SavePlatComponent implements OnInit {
  formData!: FormGroup;
  public plats: any[] = []; // Utiliser dans fetchCiqual()
  result: any; // Pour stocker le résultat ingrédient du formulaire
  mesPlats: MesPlatsI[] = [];

  filtre: string = ''; // Utiliser comme filtre dans ngModel et le pipe aliments
  filtreControl = new FormControl(); // Pour ngx-mat-select-search

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SavePlatComponent>,
    private formBuilder: FormBuilder, public supa: SupabaseService, public platService: PlatsService) { }


  async ngOnInit(): Promise<void> {
    this.fetchCiqual();
    this.fetchPlats();


    this.formData = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredient: new FormControl('')
    });

    // Ci-dessous je récupére la valeur du champ ingrédient du formulaire
    // Je subcribe à cette valeur pour l'attribuer à la variable ingredientAlimCode la valeur de alim_code que je récupére via getCurrentIngredient()
    const ingredientControl = this.formData.get('ingredient') as FormControl;
    ingredientControl.valueChanges.subscribe(async (selectedIngredient) => {
      if (selectedIngredient) {
        const ingredientAlimCode = selectedIngredient.alim_code;
        console.log(ingredientAlimCode);
        this.result = await this.supa.getCurrentIngredient(ingredientAlimCode);
        console.log(this.result);
      }
    });

  } // <------- Fin du ngOnInit()

  closeDialog() {
    this.dialogRef.close(false);
  }

  async onSubmitForm() {
    console.log(this.formData.value);
    const newEntry = {
      nom: this.formData.value.nom,
      description: this.formData.value.description,
      alim_code: this.result.alim_code
    };
    await this.supa.createPlat(newEntry).then(() => {
      this.fetchPlats();
      window.location.reload(); // Bonne solution ??
    });
  }

  async fetchCiqual() {
    const { data, error } = await this.supa.getCiqual();
    if (data) {
      this.plats = data;
    }
    if (error) {
      console.log(error);
    }
  }

  async fetchPlats() {
    const { data, error } = await this.platService.getPlats();
    if (data) {
      //Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
      //Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.
      this.mesPlats = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'],
        statut: item['statut']
      }));
      console.log(this.mesPlats.map((item) => item['nom']));
    }
    if (error) {
      //Si une erreur
      console.log(error);
    }
  }

}
