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
  public linkMessages: any[] = [];

  constructor(
    public echanges: MessagerieService,
    private formBuilder: FormBuilder,
    public supa: SupabaseService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formMessage = this.formBuilder.group({
      medecin: [null, [Validators.required]],
      activite: [null, [Validators.required]],
      objet: [null, [Validators.required]],
      echange: [null],
      link: [null],
    });
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
    this.blackMedecinImg = 'assets/imageOutils/blackMedecin.svg';
    this.echanges.getNomOrga();
    this.fetchMessages();
  }
  
  // Vérifiez que la propriété date est présente dans les objets data afin de trier l'affichage par date
  async fetchMessages() {
    const { data, error } = await this.supa.getHistoriqueMessage();
    if (data) {
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

// Methode pour envoyer un message via le button 

  async onSubmitFormMessage() {
   
    const newEntryMessage = {
      medecin: this.formMessage.value.medecin,
      activite: this.formMessage.value.activite,
      objet: this.formMessage.value.objet,
      echange: this.formMessage.value.echange,
    };
    const idLink = this.formMessage.value.link;
    await this.supa.createMessage(newEntryMessage, idLink).then(() => {
      this.fetchMessages();
      window.location.reload(); // Bonne solution ??
    });
    console.log(this.formMessage.value);
    this.formMessage.reset();
  }

  onCancel() {
    this.formMessage.reset();
  }
}
