import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../models/cards';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  listeProjetsPerso !: Cards[];
  listeProjetsScolaire !: Cards[];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
   this.listeProjetsPerso = this.cardService.cardsProjetsPerso;
   this.listeProjetsScolaire = this.cardService.cardsProjetsScolaire;

  }

 

}


