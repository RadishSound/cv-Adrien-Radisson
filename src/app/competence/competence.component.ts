import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  listeCompetencesLangue !: Cards[];
  listeCompetencesProgrammation !: Cards[];
  listeCompetencesOutil !: Cards[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
   this.listeCompetencesLangue = this.cardService.cardsCompetencesLangue;
   this.listeCompetencesProgrammation = this.cardService.cardsCompetencesProgrammation;
   this.listeCompetencesOutil = this.cardService.cardsCompetencesOutil;

  }

}
