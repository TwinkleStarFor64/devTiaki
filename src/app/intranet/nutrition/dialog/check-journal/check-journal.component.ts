import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../../journal-repas/services/event.service';
import { parseISO } from 'date-fns';
import { PlatsService } from '../../plats/services/plats.service';
import { MesPlatsI } from 'src/app/intranet/utils/modeles/Types';

@Component({
  selector: 'app-check-journal',
  templateUrl: './check-journal.component.html',
  styleUrls: ['./check-journal.component.scss']
})
export class CheckJournalComponent implements OnInit {

  events: any[] = []; 
  //selectedId!: any; // Pour stocker l'id dans ngOnInit
  selectedIdValue!: any;
  selectedTitleValue!: any;

  plats: MesPlatsI[] = [];

// Dans le constructor j'utilise data - voir la doc pour les modals
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CheckJournalComponent>, public eventService: EventService, public platsService: PlatsService) {}

  ngOnInit(): void {
    this.fetchPlats();
    this.fetchEvents();    
// Le data de this.data provient de la méthode openDialog dans journal-repas.component - elle contient l'id de l'élément sur lequel j'ai cliqué
    //this.selectedId = JSON.stringify(this.data); // selectedId contient l'id de l'événement
    this.selectedIdValue = this.data.selectedId;
    console.log(this.selectedIdValue);
    this.selectedTitleValue = this.data.selectedTitle;
    console.log(this.selectedTitleValue);
    
    

    console.log("console.log de this.data", JSON.stringify(this.data));
    //console.log('selectedID', this.selectedId);
    
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  async fetchEvents() {
    const { data, error } = await this.eventService.getEvents();
    if (data) {
      this.events = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        title: item['title'],
        start: parseISO(item['start']), // J'utilise parseISO pour convertir en un objet Date valide
        color: [item['color']],
        choice: item['choice'],
        observations: item['observations'],
        cssClass: 'calendarTitle',
        //actions: this.actions
      }));     
      console.log(this.events.map((item) => item['id']));
    }
    if (error) {
      console.log(error);      
    }
  }

  async fetchPlats() {
    const { data, error } = await this.platsService.getPlats();
    if (data) {
      this.plats = data.map((item: { [x:string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'], 
        statut: item['statut']
      }));
    }
    if (error) {
      console.log(error);      
    }
  }

}




