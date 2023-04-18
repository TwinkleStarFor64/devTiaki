import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { HistoriqueJournalI } from '../intranet/modeles/Types';

export interface AidantI {
  id: number;
  nom: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  historiqueJournal: HistoriqueJournalI[] = [];

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  //Méthode pour formater la date
  formatDate(date: string) {
    //J'utilise split pour diviser en sous-chaines les éléments de date séparé par -
    let dateParts = date.split('-');
    //Ci-dessous j'utilise chacun des items de dateParts
    let year = parseInt(dateParts[0]); //Je convertie le 1er élément (l'année) en number avec parseInt
    let month = parseInt(dateParts[1]);
    let day = parseInt(dateParts[2]);
    //Ci-dessous j'attribue à la variable newDate une new Date sur chacun des items au dessus
    let newDate = new Date(year, month - 1, day); //year, month, day ont désormais la date du jour
    return newDate.toLocaleDateString('fr'); //Cette méthode formate la date au format Fr
  }

  //Je récupére les données de la BDD supaBase
  async getAidant() {
    return await this.supabase.from('aidant').select('id, nom');
  }  

// DELETE
 async deleteJournal(id: number): Promise<void> {
  const { error } = await this.supabase
    .from('journalEvenement')
    .delete()
    .eq('id', id);    
  if (error) {
    console.log(error);    
  }
} 

  //Je récupére les données de la BDD supaBase
  async getHistoriqueJournal() {
    const journalHistorique = await this.supabase
      .from('journalEvenement') //La table journalEvenement
      .select('id, date, objet, description, commentaire, groupeEvenement (id)') //Les données que je select sur cette table
      //.eq('groupeEvenement (id)', 23)
      return journalHistorique;
  }

  //J'enregistre des données dans la BDD avec la méthode createJournal qui est asynchrone et prend 2 arguments (newEntry & relier)
  //newEntry est un objet contenant les propriétés objet, description, commentaire et date
  //relier peut être soit un objet qui contient des informations pour relier le journal à un autre, soit null.
  async createJournal(
    newEntry: {
      objet: string;
      description: string;
      commentaire: string;
      date?: Date;
    },
    relier: HistoriqueJournalI | null
  ) {
    newEntry.date = new Date(); //Le champ date aura la date actuelle

    // Cas n°1: le journal est relié à un autre
    if (relier) {
      //Ci-dessous j'attribue comme valeur à la variable newJournalEvenenement la variable newEntry + l'id de la table groupeEvenement
      const newJournalEvenement = {
        ...newEntry, //Les trois points "..." sont l'opérateur de spread en JavaScript
        groupeEvenement: relier['groupeEvenement']['id'], //Correspond à l'interface HistoriqueJournalI - groupeEvenement: {id: number}
      };

      this.insertJournal(newJournalEvenement); //J'appelle la méthode insertJournal pour enregistrer dans la table journalEvenement

      // Cas n°2: le journal n'est pas relié
    } else {
      //Ci-dessous j'insére une nouvelle ligne dans la table groupeEvenement avec insert
      //.select(): sélectionne toutes les lignes de la table "groupeEvenement", y compris la nouvelle ligne insérée précédemment.
      //.single retourne les objets au lieu d'un tableau d'objets
      const { data: groupData, error: groupError } = await this.supabase
        .from('groupeEvenement')
        .insert({})
        .select()
        .single();

      //En cas d'erreur
      if (groupError) {
        console.log(groupError);
      }

      if (groupData) {
        //Ci-dessous j'attribue comme valeur à la variable newJournalEvenenement la variable newEntry + l'id de la table groupeEvenement
        const newJournalEvenement = {
          ...newEntry,
          groupeEvenement: groupData['id'],
        };

        this.insertJournal(newJournalEvenement); //J'appelle la méthode insertJournal pour enregistrer dans la table journalEvenement
      }
    }
  }

  //Méthode pour enregistrer un journal en BDD
  //newEntry contient tout les champs de la table journalEvenenement
  async insertJournal(newEntry: {
    objet: string;
    description: string;
    commentaire: string;
    date?: Date;
    groupeEvenement?: number;
  }) {
    //On créer le journal evenement dans la base de données
    const { error: journalError } = await this.supabase
      .from('journalEvenement') //je choisi la table journalEvenement
      .insert(newEntry); //J'insére la variable newEntry

    //En cas d'erreur
    if (journalError) {
      console.log(journalError);
    }
  }
}



/* async createJournal(newEntry:{objet:string, description:string, commentaire:string, date?:Date}) {
  newEntry.date = new Date();
  const {data, error} = await this.supabase.from("journalEvenement").insert(newEntry).select().single();
  if (error) {
    console.log(error);            
  }
  if (data) {
    const {error:errorGroup} = await this.supabase.from("groupeEvenement").insert({journalEvenement:data['id']})   
    if (errorGroup) {
      console.log(errorGroup);        
    }   
  } */



/* async getHistoriqueJournalByGroupeEvenementId(evenementId:number) {
    // Récupère l'id du groupe d'événements à partir de la table groupeEvenement
    const { data: groupeEvenement, error } = await this.supabase
      .from('groupeEvenement')
      .select('id')
      .eq('id', evenementId)
      .single();
      console.log(evenementId);
      
    
    if (error) {
      console.error(error);
      return;
    }
     
    // Appelle la fonction getHistoriqueJournal() avec l'id récupéré
    const journalHistorique = await this.getHistoriqueJournal(groupeEvenement.id);
    return journalHistorique;
  } */