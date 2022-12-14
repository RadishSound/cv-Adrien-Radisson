import { Component, Input, OnInit } from '@angular/core';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

 @Input() card!: Cards;

  constructor() { }

  ngOnInit(): void {
      }
  onLink(){
    window.open(this.card.lienUrl, "_blank");
  }

}
