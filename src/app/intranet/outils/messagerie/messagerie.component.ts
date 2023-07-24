import { Component, OnInit } from '@angular/core';
import { MedecinI, RealisationI } from '../../modeles/Types';
import { MessagerieService } from './services/messagerie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss'],
})
export class MessagerieComponent implements OnInit {
  public medecinImg!: string;
  public blackMedecinImg!: string;
  public realisationImg!: string;

  public medecins: MedecinI[] = [
    {
      nom: 'Martin Genoise',
    },
    {
      nom: 'Roger Lagourge',
    },
    {
      nom: 'Michel Poiton',
    },
  ];

  public realisations: RealisationI[] = [
    {
      nom: 'Exercice Opto 1',
    },
    {
      nom: 'Exercice Opto 2',
    },
    {
      nom: 'Exercice Kiné 1',
    },
    {
      nom: "Ajout d'un plat",
    },
  ];
  formMessage!: FormGroup;
  selectedMedecin: string | null = null;

  public linkMessages : any[] = []; 

  constructor(public echanges: MessagerieService, private formBuilder: FormBuilder, public supa: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    this.formMessage = this.formBuilder.group({
      objet: [null, [Validators.required]],
      description: [null, [Validators.required]],
      commentaire: [null],
      relier: [null],
    });
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
    this.blackMedecinImg = 'assets/imageOutils/blackMedecin.svg';
    this.echanges.getNomOrga();
    // this.fetchMessages();
  }
  async fetchMessages() {
 //Ici je me récupére les données de la table journalEvenement via la méthode getHistoriqueJournal()
 const { data, error } = await this.supa.getHistoriqueMessage();
 if (data) {
   // Vérifiez que la propriété date est présente dans les objets data afin de trier l'affichage par date
   if (data[0].date) {
     data.sort(
       (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
     );
   }
   this.linkMessages = data; 
   console.log(this.linkMessages);
 }
 if (error) {
   console.log(error);
 }
  }
  async onSubmitFormMessage() {
    console.log(this.formMessage.value);
    //Ci-dessous j'attribue les valeurs
    const newEntry = {
      objet: this.formMessage.value.objet,
      description: this.formMessage.value.description,
      commentaire: this.formMessage.value.commentaire,
    };
    const idRelier = this.formMessage.value.relier;
    //J'utilise la méthode createJournal avec comme paramétre newEntry
    await this.supa.createJournal(newEntry, idRelier).then(() => {
      this.fetchMessages();
      window.location.reload(); // Bonne solution ??
    });
    this.formMessage.reset();
  }

  onCancel() {
    this.formMessage.reset();
  }

}
