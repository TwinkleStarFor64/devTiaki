import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import { EvaluationI } from 'src/app/intranet/utils/modeles/Types';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  evaluation: EvaluationI[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EvaluationComponent>,
               private formBuilder: FormBuilder, public supa: SupabaseService ) {}

 ngOnInit(): void {
    this.fetchEvaluation()
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

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

  pwet() {
    console.log("Je fais Pwet !");
    
  }

}
