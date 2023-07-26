import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  PostgrestSingleResponse,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import {
  HistoriqueJournalI,
  HistoriqueMessageI,
} from '../intranet/modeles/Types';
import { CiqualI } from '../intranet/utils/modeles/Types';
import { Observable } from 'rxjs';

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
//------------------------ Methode pour la page journal--------------------------------
  // DELETE un journal et son groupe sur la table groupeEvenement
  async deleteJournal(id: number): Promise<PostgrestSingleResponse<any>> {
    const { data: journalData, error: journalError } = await this.supabase
      .from('journalEvenement') // La table journalEvenement
      .select('groupeEvenement') // Je select la colone groupeEvenement
      .eq('id', id) // L'id de la colone journalEvenement correspond à mon paramétre ID
      .single(); // La méthode "single" est utilisée pour s'assurer que la requête retourne une seule ligne

    if (journalError) {
      console.log(journalError);
    }

    // Je recupere tous les journaux qui sont liés à l'ID journalData.groupeEvenement
    const { data: linkedJournalsData, error: linkedJournalsError } =
      await this.supabase
        .from('journalEvenement') // La table journalEvenement
        .select('id') // Je select la colone id
        .eq('groupeEvenement', journalData?.groupeEvenement);

    // Si le journal est le seul lié à ce groupe, on supprime le groupe
    if (linkedJournalsData && linkedJournalsData.length === 1) {
      const { error: groupError } = await this.supabase
        .from('groupeEvenement') // La table groupeEvenement
        .delete() // Je delete
        .eq('id', journalData?.groupeEvenement); // L'id de la colone groupeEvenement correspond à l'id récupérer au dessus - stocker dans journalData.groupeEvenement

      if (groupError) {
        console.log(groupError);
      }
    }

    return await this.supabase.from('journalEvenement').delete().eq('id', id);
  }

  //Je récupére les données de la BDD supaBase
  async getHistoriqueJournal() {
    return await this.supabase
      .from('journalEvenement') //La table journalEvenement
      .select(
        'id, date, objet, description, commentaire, groupeEvenement (id)'
      ); //Les données que je select sur cette table
  }

  //Je récupére les données de la BDD supaBase
  async getHistoriqueLinkedJournal(
    groupeEvenementId: number,
    journalEvenementId: number
  ) {
    // Renvoi tous les journaux qui sont liés au groupe sauf celui "jounalEvenementId"
    return await this.supabase
      .from('journalEvenement') //La table journalEvenement
      .select('id, date, objet, description, commentaire, groupeEvenement (id)')
      // L'id de la colone groupeEvenement correspond à l'id groupeEvenement du journal afficher - filtrer avec .eq
      .eq('groupeEvenement (id)', groupeEvenementId)
      // L'id du journal afficher est filter avec .neq pour ne pas l'afficher dans le html
      .neq('id', journalEvenementId);
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
  private async insertJournal(newEntry: {
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

  // UPDATE un journal
  async updateJournal(
    journalId: number,
    newEntry: {
      objet: string;
      description: string;
      commentaire: string;
      date?: Date;
      groupeEvenement?: number;
    }
  ) {
    newEntry.date = new Date(); //Le champ date aura la date actuelle

    const { error: updateError } = await this.supabase
      .from('journalEvenement')
      .update(newEntry) // Update avec les valeurs de newEntry - déclaré au dessus
      .eq('id', journalId); // Filtre avec l'id du journal choisi

    if (updateError) {
      console.log(updateError);
    }
  }

  async getCurrentJournal(id: number) {
    // l'ID va être dynamique quand j'appelle ma méthode dans le component
    const { data: currentData, error: currentError } = await this.supabase
      .from('journalEvenement')
      .select('id, date, objet, description, commentaire, groupeEvenement (*)')
      .eq('id', id);

    if (currentData) {
      currentData.forEach((journal) => {
        // forEach car je reçois un tableau
        console.log('journal.objet - supabase.service :', journal.objet);
      });
      return currentData;
    }
    throw new Error("Les données n'ont pas été trouvées pour cet ID.");
  }

  //------------------ Méthode pour supprimer un menu---------------------
  async deleteMenu(id: number) {
    const { error: deleteError } = await this.supabase
      .from('repas')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.log(deleteError);
    }
  }

  // --------------------Méthode pour supprimer un plat-------------------
  async deletePlat(id: number) {
    const { error: deleteError } = await this.supabase
      .from('plats')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.log(deleteError);
    }
  }

  //------------------- Méthode pour enregistrer un menu-----------------------
  async createMenu(newEntry: {
    nom: string;
    description: string;
    date?: Date;
    alim_code?: number;
    ciqual?: number;
  }) {
    newEntry.date = new Date(); //Le champ date aura la date actuelle
    const { data: menuData, error: menuError } = await this.supabase
      .from('repas')
      .insert(newEntry)
      .select()
      .single();

    if (menuError) {
      console.log(menuError);
    }
  }

  //------------------- Méthode pour enregistrer un plat------------------
  async createPlat(newEntry: {
    nom: string;
    description: string;
    date?: Date;
    alim_code?: number;
  }) {
    newEntry.date = new Date();
    const { error: platError } = await this.supabase
      .from('plats')
      .insert(newEntry)
      .select()
      .single();

    if (platError) {
      console.log(platError);
    }
  }

  // -------------------Méthode pour récupérer la table Ciqual----------------
  async getCiqual() {
    const ciqual = await this.supabase.from('ciqualAnses').select('*');
    console.log(ciqual);
    return ciqual;
  }

  //------------------ Méthode pour récupérer alim_code sur la table Ciqual - alim_code est un ID------------------------
  async getCurrentIngredient(alim_code: number) {
    const { data: currentData } = await this.supabase
      .from('ciqualAnses')
      .select('alim_code')
      .eq('alim_code', alim_code);

    if (currentData && currentData.length > 0) {
      console.log("Alim_code de l'ingrédient", currentData[0].alim_code);
      return {
        alim_code: currentData[0].alim_code,
      };
    }
    throw new Error("Les données n'ont pas été trouvées pour cet alim_code.");
  }

  // -------------------Méthode pour récupérer la table Evaluation-----------------------
  async getEvaluation() {
    const evaluation = await this.supabase.from('evaluation').select('*');
    //console.log(evaluation);
    return evaluation;
  }

  // ----------------------Méthode pour update une évaluation sur la table Repas-------------
  async updateEvalMenu(selectedEvaluation: number, selectedStatut: string) {
    const { data: evalData, error: evalError } = await this.supabase
      .from('repas')
      .update({ statut: selectedStatut })
      .eq('id', selectedEvaluation);

    if (evalError) {
      console.log(evalError);
      throw evalError;
    }
    return evalData;
  }

  //---------------------- Méthode pour update une évaluation sur la table Plats-----------------------
  async updateEvalPlat(selectedEvaluation: number, selectedStatut: string) {
    const { data: evalData, error: evalError } = await this.supabase
      .from('plats')
      .update({ statut: selectedStatut })
      .eq('id', selectedEvaluation);

    if (evalError) {
      console.log(evalError);
      throw evalError;
    }
    return evalData;
  }

  //------------------ Méthode pour récupérer l'id d'une évaluation-------------------------
  async getEvaluationById(id: number) {
    const { data, error } = await this.supabase
      .from('evaluation')
      .select('id')
      .eq('id', id)
      .single();
    console.log(data);

    if (error) {
      console.log(error);
      throw error;
    }
    return data;
  }

  // --------------------Methodes page Messagerie --------------------

// Récupération des ancien message
  async getHistoriqueMessage() {
    return await this.supabase
      .from('message') 
      .select(
        'id, medecin, activite, objet, echange, groupeMessage (id), date'
      ); 
  }
//  Méthode de création de message
  async createMessage(
    newEntryMessage: {
      medecin: string;
      activite: string;
      objet: string;
      echange: string;
      groupeMessage: number;
      date?: Date;
    },
    link: HistoriqueMessageI | null
  ) {
    newEntryMessage.date = new Date(); 

    // Cas n°1: 
    if (link) {
      const newMessageEvenement = {
        ...newEntryMessage,
        groupeMessage: link['groupeMessage']['id'],
      };

      this.insertMessage(newMessageEvenement); 

    // Cas n°2: 
    } else {
      const { data: groupData, error: groupError } = await this.supabase
        .from('groupeMessage')
        .insert({})
        .select()
        .single();
      if (groupError) {
        console.log(groupError);
      }
      if (groupData) {
        const newMessageEvenement = {
          ...newEntryMessage,
          groupeEvenement: groupData['id'],
        };
        this.insertMessage(newMessageEvenement);
      }
    }
  }
  
// Méthode d'insertion de message
  private async insertMessage(newEntryMessage: {
    medecin: string;
    activite: string;
    objet: string;
    echange: string;
    groupeMessage: number;
    date?: Date;
  }) {
    //On créer le message dans la base de données
    const { error: messagerieError } = await this.supabase
      .from('message') //je choisi la table message
      .insert(newEntryMessage); //J'insére la variable newEntryMessage
    if (messagerieError) {
      console.log(messagerieError);
    }
  }

  // Récupération d' un message
  async getCurrentMessage(id: number) {
    // l'ID va être dynamique quand j'appelle ma méthode dans le component
    const { data: currentData, error: currentError } = await this.supabase
      .from('message')
      .select('id, medecin, activite, objet, echange, groupeMessage (id), date')
      .eq('id', id);

    if (currentData) {
      currentData.forEach((message) => {
        // forEach car je reçois un tableau
        console.log('message.objet - supabase.service :', message.objet);
      });
      return currentData;
    }
    throw new Error("Les données n'ont pas été trouvées pour cet ID.");
  }

}


