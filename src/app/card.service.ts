import { Injectable } from '@angular/core';
import { Cards } from './models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardsActivite: Cards[] = [
    {
      titre: "Football",
      imageUrl: './../../assets/ensmm-foot.jpg',
      description: "J'ai pratiqué le football en club pendant 10 ans. Durant mes études à l'ENSMM j'ai rejoins l'équipe foot de cette école. J'ai été coach de l'équipe pendant une année."
    },
    {
      titre: "Guitare",
      imageUrl: './../../assets/hendrix.jpg',
      description: "Je fais de la guitare depuis mes 10 ans. Après 3 ans de cours, j'ai décidé d'arrêter pour apprendre de mon coté via des cours en ligne. Mes pricniaples influences sont Jimi Hendrix, Stevie Ray Vaughan ou encore Angus Young."
    },
    {
      titre: "Musculation",
      imageUrl: './../../assets/muscu.jpg',
      description: "Depuis 2017, je fais de la musculation chez moi ou en salle de sport."
    },
    {
      titre: "Patisserie",
      imageUrl: './../../assets/patisserie.jpeg',
    }
  ]
  cardsFormation: Cards[] = [
    {
      titre: "Diplôme d'ingénieur",
      sousTitre: "ENSMM, Besançon",
      imageUrl: './../../assets/ensmm.png',
      description: "Ecole Nationale Supérieure de Mécanique et des Microtechniques. Formation généraliste orientée mécanique. En dernière année, j'ai choisi l'option système mécatronique et robotique.",
      date: "2022",
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
      date: "2017",
      description: "Mention très bien. Spécialité Sciences de l'Ingénieur et option Informatique et Sciences du Numérique"
    }
  ]
  cardsExperience: Cards[] = [
    {
      titre: "Stage développeur logiciel",
      sousTitre: "Astrée Software, Saint-jean-Bonnefonds",
      imageUrl: './../../assets/astrée.png',
      lienNom:"voir le site",
      lienUrl:"https://www.astree-software.fr/",
      description: "Ajout de fonctionnalités spécifiques sur le logiciel MES Aquiweb.  Développeur dans une équipe agile (XP et SCRUM). Mise à jour sur serveur, revue client",
      date: "fév. 2022 - août 2022",
    },
    {
      titre: "Stage assistant ingénieur produit",
      sousTitre: "C&K, Dole ",
      imageUrl: './../../assets/c&k.png',
      date: "fév 2021-août 2021",
      lienNom:"voir le site",
      lienUrl:"https://www.ckswitches.com/",
      description: "Réalisation de préséries sur les lignes de production."+
      " Assistance à la production."+
      " Mesures et validation de produits au laboratoire."+
      " Autonomie, Organisation, Communication, Réactivité"
    }
  ]
  cardsCompetencesLangue: Cards[] = [
    {
      titre: "Français",
      sousTitre: "Langue maternelle",
      imageUrl: './../../assets/france.jpg',
        },
    {
      titre: "Anglais",
      sousTitre: "Niveau B2 (Linguaskill 2022) ",
      imageUrl: './../../assets/angleterre.webp',
    },
    {
      titre: "Espagnol",
      sousTitre: "Niveau scolaire ",
      imageUrl: './../../assets/espagne.jpg',
    }
  ]
  cardsCompetencesProgrammation: Cards[] = [
    {
      titre: "Java",
      niveau: 4,
      imageUrl: './../../assets/java.png',
      description: "",
    },
    
    {
      titre: "JavaScript, HTML, CSS",
      niveau: 3,
      imageUrl: './../../assets/html-css-js.jpg',
      description: ""
    },
    {
      titre: "Python",
      niveau: 3,
      imageUrl: './../../assets/python.png',
      description: ""
    },
    {
      titre: "SQL",
      niveau: 3,
      imageUrl: './../../assets/postgresql.png',
      description: ""
    }
  ]
  cardsCompetencesOutil: Cards[] = [
    {
      titre: "Git",
      niveau: 3,
      imageUrl: './../../assets/git.png',
      description: ""
    },
    {
      titre: "Office",
      niveau: 4,
      imageUrl: './../../assets/office.jpg',
      description: ""
    },
    {
      titre: "Angular",
      niveau: 3,
      imageUrl: './../../assets/angular.png',
      description:""
    },
    {
      titre: "Hibernate",
      niveau: 3,
      imageUrl: './../../assets/hibernate.png',
      description: ""
    },
    {
      titre: "Play",
      niveau: 3,
      imageUrl: './../../assets/play.png',
      description: ""
    },
    {
      titre: "NodeJS",
      niveau: 2,
      imageUrl: './../../assets/nodejs.png',
      description: ""
    }
  ]
  cardsProjetsPerso: Cards[] = [
    {
      titre: "tableau Kanban",
      sousTitre: "Angular",
      date: "2022",
      imageUrl: './../../assets/kanban.png',
      description:"",
      lienUrl: "https://kanban-1c263.web.app",
      lienNom: "Lien vers projet"

    },
    
    {
      titre: "Snake",
      sousTitre: "JavaScript",
      date: "2022",
      imageUrl: './../../assets/snake.png',
      description:"",
      lienUrl: "https://snake-game-16640.web.app",
      lienNom: "Lien vers projet"

    }
  ]
  cardsProjetsScolaire: Cards[] = [
    {
      titre: "tableau Kanban",
      sousTitre: "angular",
      imageUrl: './../../assets/kanban.png',
      description:"",
      lienUrl: "https://kanban-1c263.web.app",
      lienNom: "Lien vers projet"

    },
    
    {
      titre: "Snake",
      sousTitre: "javaScript",
      imageUrl: './../../assets/snake.png',
      description:"",
      lienUrl: "https://snake-game-16640.web.app",
      lienNom: "Lien vers projet"

    }
  ]

  }
