import { Component, Input } from '@angular/core';
import { EvalI } from '../../partage/modeles/Types';

@Component({
  selector: 'app-eval',
  templateUrl: './eval.component.html',
  styleUrls: ['./eval.component.scss'],
})
export class EvalComponent {
  eval:EvalI = {etoiles:0, id:0, aidant:12}; // La note en cours
  importance:string = ''; // Importance de la note
  listeEvals:Array<EvalI> = []; // Listes des notes sur le sujet traité

  @Input('id') id!:number; // Id de l'élément à mettre à jour sur la base de données
  @Input('table') table?:string; // Table à mettre à jour (déterminer les relatons pour les mises à jours)
  @Input('classe') classe?:string; // La classe pour colorer les étoiles
}
