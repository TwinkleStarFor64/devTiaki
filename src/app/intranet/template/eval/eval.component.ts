import { Component, Input } from '@angular/core';
import { EvalI } from '../../partage/modeles/Types';

@Component({
  selector: 'app-eval',
  templateUrl: './eval.component.html',
  styleUrls: ['./eval.component.scss']
})
export class EvalComponent {
  eval!:EvalI; // La note en cours
  importance:string = ''; // Importance de la note
  listeEvals:Array<EvalI> = []; // Listes des notes sur le sujet traité

  @Input('id') id!:number; // Id de l'élément à mettre à jour sur la base de données
  @Input('table') table!:string; // Table à mettre à jour (déterminer les relatons pour les mises à jours)
}
