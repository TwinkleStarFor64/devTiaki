import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatI } from 'src/app/partage/modeles/Types';
import { NutritionService } from '../../services/nutrition.service';

@Component({
  selector: 'app-save-plat',
  templateUrl: './save-plat.component.html',
  styleUrls: ['./save-plat.component.scss']
})
export class SavePlatComponent implements OnInit {
  formData!: FormGroup;
  public plats: any[] = []; // Utiliser dans fetchCiqual()
  result: any; // Pour stocker le résultat ingrédient du formulaire
  mesPlats: Array<PlatI> = [];

  filtre: string = ''; // Utiliser comme filtre dans ngModel et le pipe aliments
  filtreControl = new FormControl(); // Pour ngx-mat-select-search

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SavePlatComponent>, public nutri:NutritionService) {}


  async ngOnInit(): Promise<void> {

    this.formData = new FormGroup ({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredient: new FormControl('')
    });

    // Ci-dessous je récupére la valeur du champ ingrédient du formulaire
    // Je subcribe à cette valeur pour l'attribuer à la variable ingredientAlimCode la valeur de alim_code que je récupére via getCurrentIngredient()
    const ingredientControl = this.formData.get('ingredient') as FormControl;
    ingredientControl.valueChanges.subscribe( async (selectedIngredient) => {
      if (selectedIngredient) {
        const ingredientAlimCode = selectedIngredient.alim_code;
        console.log(ingredientAlimCode);
        // this.result = await this.get.getCurrentIngredient(ingredientAlimCode);
        // console.log(this.result);
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
    // await this.edit.createPlat(newEntry).then(() => {
    //   this.fetchPlats();
    //   window.location.reload(); // Bonne solution ??
    // });
  }
}
