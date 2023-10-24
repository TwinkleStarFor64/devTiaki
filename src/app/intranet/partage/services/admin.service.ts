import { Injectable } from '@angular/core';
import {createClient, PostgrestSingleResponse, SupabaseClient} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private supabase: SupabaseClient; // Instance du client Supabase

  constructor() {
    this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey);
  }

  /**
   * Supprimer un menu
   * @param id Id du menu à supprimer
   */
  async deleteMenu(id: number) {
    const { error: deleteError } = await this.supabase
      .from('repas')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.log(deleteError);
    }
  }
  /**
   * Suprimer un plat
   * @param id Id du plat à supprimer
   */
  async deletePlat(id: number) {
    const { error: deleteError } = await this.supabase
      .from('plats')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.log(deleteError);
    }
  }
  /** DELETE un journal et son groupe sur la table groupeEvenement
   * @param id {number} Id du journal
  */
  async deleteJournal(id: number): Promise<PostgrestSingleResponse<any>> {
    const { data: journalData, error: journalError } = await this.supabase
      .from('journalEvenement') // La table journalEvenement
      .select('groupeEvenement') // Je select la colone groupeEvenement
      .eq('id', id) // L'id de la colone journalEvenement correspond à mon paramétre ID
      .single(); // La méthode "single" est utilisée pour s'assurer que la requête retourne une seule ligne

    if (journalError) {
      console.log(journalError);
    }

    /**
     * Récupérer le journaux en lien avec l'ID journalData.groupeEvenement
     */
    const { data: linkedJournalsData, error: linkedJournalsError } =
      await this.supabase
        .from('journalEvenement')
        .select('id')
        .eq('groupeEvenement', journalData?.groupeEvenement);

    /** Suppression du groupe si le journal supprimé était le seul présent dans le groupe */
    if (linkedJournalsData && linkedJournalsData.length === 1) {
      const { error: groupError } = await this.supabase
        .from('groupeEvenement')
        .delete()
        .eq('id', journalData?.groupeEvenement); // L'id de la colone groupeEvenement correspond à l'id récupérer au dessus - stocker dans journalData.groupeEvenement

      if (groupError) {
        console.log(groupError);
      }
    }

    return await this.supabase.from('journalEvenement').delete().eq('id', id);
  }
}
