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
      description: ["J'ai pratiqué le football en club pendant 10 ans."," Durant mes études à l'ENSMM j'ai rejoins l'équipe foot de cette école."," J'ai été coach de l'équipe pendant une année."]
    },
    {
      titre: "Guitare",
      imageUrl: './../../assets/hendrix.jpg',
      description: []
    },
    {
      titre: "Musculation",
      imageUrl: './../../assets/muscu.jpg',
      description: [] 
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
      description: ["Formation généraliste orientée mécanique."," En dernière année, j'ai choisi l'option système mécatronique et robotique."],
      date: "2022",
    },
    {
      titre: "Classes préparatoires",
      sousTitre: "Lycée Jean-Perrin, Lyon ",
      imageUrl: './../../assets/prepa.jpg',
      date: "2019-2017",
      description: ["Physique et sciences de l'ingénieur"]
    },
    {
      titre: "Baccalauréat scientifique",
      sousTitre: "Lycée de la Plaine de l'Ain, Ambérieu-en-Bugey",
      imageUrl: './../../assets/bac.jpg',
      date: "2017",
      description: ["Mention très bien.","Spécialité Sciences de l'Ingénieur et option Informatique et Sciences du Numérique"]
    }
  ]
  cardsExperience: Cards[] = [
    {
      titre: "Stage développeur logiciel",
      sousTitre: "Astrée Software, Saint-jean-Bonnefonds",
      imageUrl: './../../assets/astrée.png',
      lienNom:"voir le site",
      lienUrl:"https://www.astree-software.fr/",
      description: ["Ajout de fonctionnalités spécifiques sur le logiciel MES Aquiweb.","  Développeur dans une équipe agile (XP et SCRUM)."," Mise à jour sur serveur, revue client"],
      date: "fév. 2022 - août 2022",
    },
    {
      titre: "Stage assistant ingénieur produit",
      sousTitre: "C&K, Dole ",
      imageUrl: './../../assets/c&k.png',
      date: "fév 2021-août 2021",
      lienNom:"voir le site",
      lienUrl:"https://www.ckswitches.com/",
      description: ["Réalisation de préséries sur les lignes de production.",
      " Assistance à la production.",
      " Mesures et validation de produits au laboratoire.",
      " Autonomie, Organisation, Communication, Réactivité"]
    }
  ]
  cardsCompetencesLangue: Cards[] = [
    {
      titre: "Français",
      sousTitre: "Langue maternelle",
      imageUrl: './../../assets/france.png',
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
    },
    
    {
      titre: "JavaScript, HTML, CSS",
      niveau: 3,
      imageUrl: './../../assets/html-css-js.jpg',
    },
    {
      titre: "Python",
      niveau: 3,
      imageUrl: './../../assets/python.png',
    },
    {
      titre: "SQL",
      niveau: 3,
      imageUrl: './../../assets/postgresql.png',
    }
  ]
  cardsCompetencesOutil: Cards[] = [
    {
      titre: "Git",
      sousTitre: "Outil de versionning",
      niveau: 3,
      imageUrl: './../../assets/git.png',
    },
    {
      titre: "Office",
      sousTitre: "bureautique",

      niveau: 4,
      imageUrl: './../../assets/office.jpg',
    },
    {
      titre: "Angular",
      sousTitre: "Framework Front-end, TypeScript",
      niveau: 3,
      imageUrl: './../../assets/angular.png',
    },
    {
      titre: "Hibernate",
      sousTitre: "Framework back-end, ORM, Java",
      niveau: 3,
      imageUrl: './../../assets/hibernate.png',
    },
    {
      titre: "Play",
      sousTitre: "Framework back-end Java",
      niveau: 3,
      imageUrl: './../../assets/play.png',
    },
    {
      titre: "NodeJS",
      sousTitre: "Framework back-end JavaScript",
      niveau: 2,
      imageUrl: './../../assets/nodejs.png',
    }
  ]
  cardsProjetsPerso: Cards[] = [
    {
      titre: "tableau Kanban",
      sousTitre: "Angular",
      date: "2022",
      imageUrl: './../../assets/kanban.png',
      lienUrl: "https://kanban-1c263.web.app",
      lienNom: "Lien vers projet"

    },
    
    {
      titre: "Snake",
      sousTitre: "JavaScript",
      date: "2022",
      imageUrl: './../../assets/snake.png',
      lienUrl: "https://snake-game-16640.web.app",
      lienNom: "Lien vers projet"

    },
    {
      titre: "Pierre, feuille, ciseaux",
      sousTitre: "JavaScript",
      date: "2022",
      imageUrl: './../../assets/pierre-feuille-ciseaux.png',
      lienUrl: "https://pierre-feuille-ciseaux-5e109.web.app/",
      lienNom: "Lien vers projet"

    }
  ]
  cardsProjetsScolaire: Cards[] = [
    {
      titre:"Robot delta trieur de déchets",
      sousTitre: "Python",
      date: "2022",
      imageUrl: './../../assets/pist.jpg',
      description:["modélisation et contrôle du robot avec des moteurs Dynamixel"],
    },
    
    {
      titre: "Commande multivariable",
      sousTitre: "Matlab",
      date: "2022",
      imageUrl: './../../assets/commande multivariable.png',
      description:["Commande d'un système non linéaire dynamique multivariable."," Mise en place d'un observateur, linéarisation du sytème, découplage, représentation d'état."],
      

    },
    {
      titre: "Vision 3D",
      sousTitre: "Matlab",
      date: "2022",
      imageUrl: './../../assets/vision3D.png',
      description:[" Mosaique de deux images par homographie "],
      
    },
    {
      titre: "Vision 3D",
      sousTitre: "Matlab",
      date: "2022",
      imageUrl: './../../assets/vision3d-2.png',
      description:["Représentation  3D d'un cube par triangulation 3D sur deux images"],

    },
    {
      titre: "Vision 2D",
      sousTitre: "Python, openCV",
      date: "2022",
      imageUrl: './../../assets/vision2D.png',
      description:["Détection de forme sur une image"],
      
    },
    {
      titre: "Jeu multijoueur Amung Us",
      sousTitre: "Java",
      date: "2021",
      imageUrl: './../../assets/amung-us.png',
      description:["Jeu multijoueur de type Among-us réalisé en équipe de 7 personnes."],
    },
    {
      titre: "Labyrinthe",
      sousTitre: "Java",
      date: "2020",
      imageUrl: './../../assets/labyrinthe.png',
      description:["Réalisation d'un labyrinthe avec solution"],
    },
    {
      titre: "Jeu Démineur",
      sousTitre: "Python, tkinter",
      date: "2017",
      imageUrl: './../../assets/demineur.png',
      description:["Réalisation d'un démineur en équipe de 3."],
    }
  ]

  }
