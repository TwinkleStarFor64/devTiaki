import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import { CiqualI } from 'src/app/intranet/utils/modeles/Types';

@Component({
  selector: 'app-save-data',
  templateUrl: './save-data.component.html',
  styleUrls: ['./save-data.component.scss'],
})
export class SaveDataComponent implements OnInit {
  formData!: FormGroup;
  public repas: any[] = []; // Utiliser dans fetchCiqual()
  result: any; // Pour stocker le résultat ingrédient du formulaire  
  
  filtre: string = ''; // Utiliser comme filtre dans ngModel et le pipe aliments
  //public searchControl : FormControl = new FormControl(); // Pour ngx-mat-select-search 
  filtreControl = new FormControl(); // Pour ngx-mat-select-search 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SaveDataComponent>,
               private formBuilder: FormBuilder, public supa: SupabaseService ) {}

  async ngOnInit(): Promise<void>  {
    this.fetchCiqual(); 
    
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
    await this.supa.createMenu(newEntry).then(() => { 
      this.fetchCiqual();     
      window.location.reload(); // Bonne solution ??
    });    
  }

  async fetchCiqual() {
    const { data, error } = await this.supa.getCiqual();
    if (data) {
      this.repas = data;
    }
    if (error) {
      console.log(error);
    }
  }

  
  
  

  

}
