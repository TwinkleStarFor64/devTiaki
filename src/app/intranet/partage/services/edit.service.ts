import { Injectable } from '@angular/core';
import {createClient, PostgrestSingleResponse, SupabaseClient} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { JournalI, MessageI } from '../modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private supabase: SupabaseClient; // Instance du client Supabase

  constructor() {
    this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey);
  }
  //------------------------ Methode pour la page journal--------------------------------
  /**
   * Créer un journal
   * @param newEntry objet contenant les propriétés objet, description, commentaire et date
   * @param relier peut être soit un objet qui contient des informations pour relier le journal à un autre, soit null
   */
  async createJournal(
    newEntry: {
      objet: string;
      description: string;
      commentaire: string;
      date?: Date;
    },
    relier: JournalI | null
  ) {
    newEntry.date = new Date(); //Le champ date aura la date actuelle

    // Cas n°1: le journal est relié à un autre
    if (relier) {
      //Ci-dessous j'attribue comme valeur à la variable newJournalEvenenement la variable newEntry + l'id de la table groupeEvenement
      const newJournalEvenement = {
        ...newEntry, //Les trois points "..." sont l'opérateur de spread en JavaScript
        groupeEvenement: relier['groupeEvenement']['id'], //Correspond à l'interface JournalI - groupeEvenement: {id: number}
      };

      this.insertJournal(newJournalEvenement); //J'appelle la méthode insertJournal pour enregistrer dans la table journalEvenement

      // Cas n°2: le journal n'est pas relié
    } else {
      // Ci-dessous j'insére une nouvelle ligne dans la table groupeEvenement avec insert
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
  /**
   * Méthode pour enregistrer un journal en BDD
   * @param newEntry contient tout les champs de la table journalEvenenement
   */
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

  /**
   * Mise à jour d'un journal
   * @param journalId Id du journal à mettre à jour
   * @param newEntry contient tout les champs de la table journalEvenenement
   */
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
  /**
   * Enregistrer un nouveau menu
   * @param newEntry Menu à enregistrer dans la base
   */
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
  /**
   * Enregistrer un nouveau plat
   * @param newEntry Plat à enregistrer dans la base
   */
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
  }/**
   * Méthode de création de message
   * @param newEntryMessage Nouveau message à écrire
   * @param link
   */
  async createMessage(
    newEntryMessage: {
      medecin: string;
      activite: string;
      objet: string;
      echange: string;
      // groupeMessage: number;
      date?: Date;
    },
    link?: MessageI | null
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
          groupeMessage: groupData['id'],
        };
        this.insertMessage(newMessageEvenement);
      }
    }
  }
  /**
   * Méthode d'insertion de message
   * @param newEntryMessage Message à insérer
   */
  private async insertMessage(newEntryMessage: {
    medecin: string;
    activite: string;
    objet: string;
    echange: string;
    groupeMessage?: number;
    date?: Date;
  }) {
    //On créer le message dans la base de données
    newEntryMessage.date = new Date();
    const { error: messagerieError } = await this.supabase
      .from('message') //je choisi la table message
      .insert(newEntryMessage); //J'insére la variable newEntryMessage

    if (messagerieError) {
      console.log(messagerieError);
    }
  }
  /**
   * Méthode pour update une évaluation sur la table Repas
   * @param selectedEvaluation Evaluation choisie
   * @param selectedStatut Statut sélectionné
   * @returns
   */
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

  /**
   * Mettre à jour une évaluation sur la table des plats
   * @param selectedEvaluation Evaluation sélectionnée
   * @param selectedStatut Statut sélectionné
   * @returns
   */
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
}
