import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  listeExperiences !: Cards[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
   this.listeExperiences = this.cardService.cardsExperience;
  }

}
