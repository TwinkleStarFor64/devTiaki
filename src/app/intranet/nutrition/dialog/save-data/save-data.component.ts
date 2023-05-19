import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-save-data',
  templateUrl: './save-data.component.html',
  styleUrls: ['./save-data.component.scss']
})
export class SaveDataComponent implements OnInit {
  
  formData!: FormGroup;
  public repas: any[] = [];
  //result: any;
  result!: { id: number, alim_code: number };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SaveDataComponent>,
               private formBuilder: FormBuilder, public supa: SupabaseService ) {}

  async ngOnInit(): Promise<void>  {
    this.formData = new FormGroup ({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredient: new FormControl('')
    });
    this.fetchCiqual();
    this.fetchCiqualBis();
    
    const ingredientControl = this.formData.get('ingredient') as FormControl;
    ingredientControl.valueChanges.subscribe( async (selectedIngredient) => {
      if (selectedIngredient) {
        const ingredientId = selectedIngredient.id; 
        const ingredientAlimCode = await this.supa.getCurrentIngredient(ingredientId);       
        //this.result = await this.supa.getCurrentIngredient(ingredientId);
        this.result = {
          id: selectedIngredient.id,
          alim_code: ingredientAlimCode.alim_code
        };
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
      ciqual: this.result.id,  
      alim_code: this.result.alim_code   
    };
    await this.supa.createMenu(newEntry).then(() => {      
     //window.location.reload(); // Bonne solution ??
    });    
  }

  async fetchCiqual() {    
    const { data, error }  = await this.supa.getCiqual();
    if (data) {
      this.repas = data;
    }
    if (error) {
      console.log(error);
    }
  }  

  async fetchCiqualBis() {
    const { data, error } = await this.supa.getCiqualBis();
    if (data) {
      this.repas = data;
    }
    if (error) {
      console.log(error);
    }
  }

}
