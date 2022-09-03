import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  adresseMail = 'adrien.radisson@outlook.fr';
  telephone = '06 30 89 87 70';
  constructor() { }

  ngOnInit(): void {
  }

}
