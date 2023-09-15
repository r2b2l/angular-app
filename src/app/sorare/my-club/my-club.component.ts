import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { Card } from 'src/app/models/sorare/card';

@Component({
  selector: 'app-my-club',
  templateUrl: './my-club.component.html',
  styleUrls: ['./my-club.component.scss']
})
export class MyClubComponent implements OnInit {
  cards: Card[] = [];
  constructor(private clubService: ClubService){}

  ngOnInit(): void{
    this.getCards();
  }

  getCards(): void {
    this.clubService.getMyClubCards().subscribe(
      cardsArray => this.cards = cardsArray
      );
  }
}
