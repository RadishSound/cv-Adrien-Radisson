import { Injectable } from '@angular/core';
import { Cards } from './models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardsActivite: Cards[] = [
    {
      titre: "Football",
      sousTitre: "En club pendant 10 ans",
      imageUrl: './../../assets/ensmm-foot.jpg',
      description: "J'ai pratiqué le football en club pendant 10 ans. Durant mes études à l'ENSMM j'ai rejoins l'équipe foot de cette école. J'ai été coach de l'équipe pendant une année."
    },
    {
      titre: "Guitare",
      sousTitre: "Depuis mes 10 ans",
      imageUrl: './../../assets/hendrix.jpg',
      description: "Je fais de la guitare depuis mes 10 ans. Après 3 ans de cours, j'ai décidé d'arrêter pour apprendre de mon coté via des cours en ligne. Mes pricniaples influences sont Jimi Hendrix, Stevie Ray Vaughan ou encore Angus Young."
    },
    {
      titre: "Musculation",
      sousTitre: "depuis 5 ans",
      imageUrl: './../../assets/muscu.jpg',
      description: "Depuis 2017, je fais de la musculation chez moi ou en salle de sport."
    },
    {
      titre: "Patisserie",
      sousTitre: "depuis 1 an",
      imageUrl: './../../assets/muscu.jpg',
      description: "Depuis 2017, je fais de la musculation chez moi ou en salle de sport."
    }
  ]
  cardsFormation: Cards[] = [
    {
      titre: "Diplôme d'ingénieur",
      sousTitre: "ENSMM, Beançon",
      imageUrl: './../../assets/ensmm.png',
      description: "Ecole Nationale Supérieure de Mécanique et des Microtechniques. Formation généraliste orientée mécanique. En dernière année, j'ai choisi l'option système mécatronique et robotique.",
      date: "2022-2019",
      titleButton: " + INFO "
    },
    {
      titre: "Classes préparatoires",
      sousTitre: "Lycée Jean-Perrin, Lyon ",
      imageUrl: './../../assets/prepa.jpg',
      date: "2019-2017",
      description: "Physique et sciences de l'ingénieur"
    },
    {
      titre: "Baccalauréat scientifique",
      sousTitre: "Lycée de la Plaine de l'Ain, Ambérieu-en-Bugey",
      imageUrl: './../../assets/bac.jpg',
      date: "2014-2017",
      description: "Mention très bien. Spécialité Sciences de l'Ingénieur et option Informatique et Sciences du Numérique"
    }
  ]
  cardsExperience: Cards[] = [
    {
      titre: "Développeur logiciel",
      sousTitre: "Astrée Software, Saint-jean-Bonnefonds",
      imageUrl: './../../assets/astrée.png',
      description: "Ajout de fonctionnalités spécifiques sur le logiciel MES Aquiweb.  Développeur dans une équipe agile (XP et SCRUM). Mise à jour sur serveur, revue client",
      date: "fév. 2022 - août 2022",
    },
    {
      titre: "Assistant ingénieur produit",
      sousTitre: "C&K, Dole ",
      imageUrl: './../../assets/c&k.png',
      date: "fév 2021-août 2021",
      description: "Réalisation de préséries sur les lignes de production."+
      " Assistance à la production."+
      " Mesures et validation de produits au laboratoire."+
      " Autonomie, Organisation, Communication, Réactivité"
    }
  ]
  cardsCompetencesLangue: Cards[] = [
    {
      titre: "Français",
      sousTitre: "langue maternelle",
      imageUrl: './../../assets/france.jpg',
      niveau: 100
        },
    {
      titre: "Anglais",
      sousTitre: "niveau B2 (Linguaskill 2022) ",
      imageUrl: './../../assets/angleterre.webp',
    },
    {
      titre: "Espagnol",
      sousTitre: "niveau A2 ",
      imageUrl: './../../assets/espagne.jpg',
    }
  ]
  cardsCompetencesProgrammation: Cards[] = [
    {
      titre: "Java",
      imageUrl: './../../assets/java.png',
      description: "",
    },
    
    {
      titre: "JavaScript, HTML, CSS",
      imageUrl: './../../assets/html-css-js.jpg',
      description: ""
    },
    {
      titre: "Python",
      imageUrl: './../../assets/python.png',
      description: ""
    },
    {
      titre: "SQL",
      imageUrl: './../../assets/postgresql.png',
      description: ""
    }
  ]
  cardsCompetencesOutil: Cards[] = [
    {
      titre: "Git",
      imageUrl: './../../assets/git.png',
      description: ""
    },
    {
      titre: "Office",
      imageUrl: './../../assets/office.jpg',
      description: ""
    },
    {
      titre: "Angular",
      imageUrl: './../../assets/angular.png',
      description:""
    },
    {
      titre: "Hibernate",
      imageUrl: './../../assets/hibernate.png',
      description: ""
    },
    {
      titre: "Play",
      imageUrl: './../../assets/play.png',
      description: ""
    },
    {
      titre: "NodeJS",
      imageUrl: './../../assets/nodejs.png',
      description: ""
    }
  ]
  }
