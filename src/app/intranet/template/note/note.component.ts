import { Component, Input} from '@angular/core';
import { InfosService } from 'src/app/partage/services/infos.service';
import { NoteI } from '../../partage/modeles/Types';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  note!:NoteI; // La note en cours
  importance:string = ''; // Importance de la note
  listeNotes:Array<NoteI> = []; // Listes des notes sur le sujet traité

  @Input('id') id!:number; // Id de l'élément à mettre à jour sur la base de données
  @Input('table') table!:string; // Table à mettre à jour (déterminer les relatons pour les mises à jours)

  constructor(public l:InfosService){};
  initNote(){
    this.note = {titre:'', description:'', relation:-1, table:''}
  }
  /** Créer une nouvelle note dans la base de données */
  setNote(){

  }
  /** Récupérer la liste des notes correspodant aux paramètres injectés */
  getNotes(){

  }
  /** Mettre à jour une note */
  updateNote(id:number){

  }
  /** Supprimer une note */
  supprNote(id:number){}
}
