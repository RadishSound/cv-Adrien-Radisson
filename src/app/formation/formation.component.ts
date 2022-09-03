import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  listeFormations !: Cards[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
   this.listeFormations = this.cardService.cardsFormation;
  }

}
