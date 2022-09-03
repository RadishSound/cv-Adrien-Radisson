import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent  {
  listActivities !: Cards[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
   this.listActivities = this.cardService.cardsActivite;
  }

}
