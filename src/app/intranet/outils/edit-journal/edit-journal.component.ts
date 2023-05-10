import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageJournalI } from 'src/app/intranet/modeles/journal.js';
import { SupabaseService } from 'src/app/services/supabase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-journal',
  templateUrl: './edit-journal.component.html',
  styleUrls: ['./edit-journal.component.scss']
})
export class EditJournalComponent {

  formJournal!: FormGroup;
  public reliers: any[] = [];

  constructor( private formBuilder: FormBuilder, public supa: SupabaseService, private router: ActivatedRoute, private route: Router ) { }
  
  async ngOnInit(): Promise <void> {
    // Ci-dessous je déclare un formulaire par défaut
    this.formJournal = this.formBuilder.group({
       objet: [null, [Validators.required]],
       description: [null, [Validators.required]],
       commentaire: [null],
       relier: [null],
     });

    this.fetchJournals();

    // Ci-dessous j'utilise la propriété snapshot de l'objet router d'Angular pour récupérer les paramètres de la route actuelle
    // La méthode snapshot retourne une capture instantanée de l'état de la route au moment de son appel.
    // Dans ce cas, je récupére le paramètre 'id' de la route en accédant à la propriété 'params' de l'objet snapshot
    console.log("snapshot id", this.router.snapshot.params['id']);
    // J'appelle getCurrentJournal(id: number) - j'attribue à id de la méthode l'id que je récupére avec snapshot
    const result = await this.supa.getCurrentJournal(this.router.snapshot.params['id']); 

    result.forEach((journal) => { // forEach sur result - j'attribue le résultat à la variable journal
    console.log("journal.groupeEvenement", journal.groupeEvenement);

    // J'attribue en value au formulaire les données de la variable journal
    this.formJournal = this.formBuilder.group({
      objet: [journal.objet, [Validators.required]],
      description: [journal.description, [Validators.required]],
      commentaire: [journal.commentaire],
      relier: [journal.groupeEvenement],
    });
    })
    
  }

  async fetchJournals() {
    //Ici je me récupére les données de la table journalEvenement via la méthode getHistoriqueJournal()
    const { data, error } = await this.supa.getHistoriqueJournal();
    if (data) {
      // Vérifiez que la propriété date est présente dans les objets data afin de trier l'affichage par date
      if (data[0].date) {
        // Tri des objets data par date décroissante
        data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
      this.reliers = data; //La variable reliers de type HistoriqueJournalI contient les données de data
      //console.log(this.reliers);//Dans ce log je dois voir tout les journaux de la table journalEvenement      
    }
    if (error) {
      console.log(error);
    }
  }

  // Méthode pour enregistrer un journal via le formulaire
  async onSubmitForm() {
    console.log(this.formJournal.value);  
    // Ci-dessous j'attribue les valeurs au formulaire
    const newEntry = {
      objet: this.formJournal.value.objet,
      description: this.formJournal.value.description,
      commentaire: this.formJournal.value.commentaire,      
    }
    const idRelier = this.formJournal.value.relier;
    const id = this.router.snapshot.params['id']
    //J'utilise la méthode updateJournal avec comme paramétre l'id obtenue avec snapshot et la variable newEntry
    await this.supa.updateJournal(id, newEntry).then(() => {
      this.fetchJournals()
    }); 
    this.route.navigateByUrl('/intranet/outils/historique'); // Je retourne sur la page historique
  }

  onCancel() {
    this.route.navigateByUrl('/intranet/outils/historique'); // Je retourne sur la page historique   
  }
  
}
