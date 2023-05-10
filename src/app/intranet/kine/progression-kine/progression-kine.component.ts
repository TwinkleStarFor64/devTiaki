import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';

@Component({
  selector: 'app-progression-kine',
  templateUrl: './progression-kine.component.html',
  styleUrls: ['./progression-kine.component.scss'],
})
export class ProgressionKineComponent implements OnInit {
  avatar!: string;
  public exercices: ExerciceI[] = [
    {
      photo: 'assets/exoKine/ours.svg',
      titre: 'Ours',
      description:
        'Exercice de renforcement musculaire pour améliorer la stabilité et la coordination du corps, ainsi que pour renforcer les muscles profonds de la ceinture scapulaire, de la ceinture pelvienne et des abdominaux.Positionnement à quatre pattes sur le sol en maintenant le dos plat, puis avance en alternant le mouvement de chaque bras et chaque jambe.',
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/planche.svg',
      titre: 'Planche',
      description:
        'La planche est un exercice de renforcement musculaire pour renforcer les muscles abdominaux, les muscles du dos et les muscles des membres inférieurs.Positionnement de planche en appui sur les avant-bras et les orteils, en gardant le corps droit et les abdominaux contractés. Efficace pour améliorer la stabilité du tronc, la posture et la coordination musculaire.',
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/grenouille.svg',
      titre: 'Grenouille',
      description:
        " Exercice de renforcement musculaire pour améliorer la force, l'endurance et la stabilité des muscles des membres inférieurs, en particulier les quadriceps, les fessiers et les muscles du mollet.Positionnement accroupie et avance dans cette position.",
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/4pattes.svg',
      titre: '4 pattes',
      description:
        "Exercice de renforcement musculaire pour renforcer les muscles des membres inférieurs, des membres supérieurs, du tronc et améliorer la coordination.Positionnemment à quatre pattes sur le sol en maintenant le dos plat . Ensuite, soulever une jambe et le bras opposé en maintenant l'équilibre sur les membres restants, puis répèter l'exercice avec l'autre jambe et l'autre bras. Renforcement des membres supérieurs et inférieurs, et améliorer la proprioception (sensibilité des articulations).",
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/escalier.svg',
      titre: 'Escalier',
      description:
        "Exercice pour renforcer les muscles des membres inférieurs, améliorer la coordination et l'endurance.Monter et descendre d'un escalier (ou autre) à un rythme régulier en utilisant les jambes pour monter et descendre les marches. Permet de traiter les douleurs chroniques des membres inférieurs.",
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/retournement.svg',
      titre: 'Retournement',
      description:
        "Exercice de coordination pour améliorer la mobilité de la colonne vertébrale et renforcer les muscles abdominaux.se couche sur le dos, fléchit les genoux et place les pieds à plat sur le sol. Ensuite, le patient décolle une jambe et la fait passer par-dessus l'autre jambe, en gardant les deux épaules au sol. Répéter l'exercice avec l'autre jambe pour effectuer un cycle de retournement.",
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/rampe.svg',
      titre: 'Ramper',
      description:
        'Exercice pour renforcer les muscles des membres inférieurs, des membres supérieurs, du tronc et améliorer la coordination.Positionnement sur le sol avancer en alternant le mouvement de la jambe et du bras opposé pour avancer en rampant.',
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
    {
      photo: 'assets/exoKine/appuis.svg',
      titre: 'Appuis',
      description:
        'Exercice pour renforcer les muscles des membres inférieurs, des membres supérieurs, du tronc et améliorer la coordination.Positionnement assis sur le sol et bras tendu, pivotemment du tronc de droite à gauche afin de travailler la coordination. ',
      horloge: 'assets/iconeKineOpto/horloge.svg',
      materiel: 'assets/iconeKineOpto/materiel.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
  }
}
