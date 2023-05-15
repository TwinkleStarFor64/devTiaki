import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-save-data',
  templateUrl: './save-data.component.html',
  styleUrls: ['./save-data.component.scss']
})
export class SaveDataComponent implements OnInit {

  formData!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SaveDataComponent>, private formBuilder: FormBuilder, public supa: SupabaseService) {}

  ngOnInit(): void {
    this.formData = new FormGroup ({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  async onSubmitForm() {
    console.log(this.formData.value);
    const newEntry = {
      nom: this.formData.value.nom,
      description: this.formData.value.description,      
    };
    await this.supa.createMenu(newEntry).then(() => {
      
     window.location.reload(); // Bonne solution ??
    });
  }

}
