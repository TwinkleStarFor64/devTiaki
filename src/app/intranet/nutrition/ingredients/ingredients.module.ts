import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentsPipe } from '../../utils/pipes/aliments.pipe';


@NgModule({
  declarations: [
    AlimentsPipe
  ],
  imports: [
    CommonModule,
    
  ]
})
export class IngredientsModule { }
