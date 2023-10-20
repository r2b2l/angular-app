import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClubService } from '../club.service';
import { Card } from 'src/app/models/sorare/card';
import { Player } from 'src/app/models/sorare/player';
import { PlayerInfosModalComponent } from '../player/player-infos-modal/player-infos-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-club',
  templateUrl: './my-club.component.html',
  styleUrls: ['./my-club.component.scss']
})

/**
 * Club Component
 */
export class MyClubComponent implements OnInit {
  cards: Card[] = [];
  filteredCards: Card[] = [];
  rarityFilters: any[] = [
    {value: 'init', viewValue: ''},
    {value: 'common', viewValue: 'Common'},
    {value: 'limited', viewValue: 'Limited'},
    {value: 'rare', viewValue: 'Rare'},
    {value: 'super-rare', viewValue: 'Super Rare'},
    {value: 'unique', viewValue: 'Unique'},
  ];

  constructor(private clubService: ClubService, public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.getCards();
  }

  /**
   * Get my club cards
   */
  getCards(): void {
    this.clubService.getMyClubCards().subscribe(
      cardsArray => {
        this.cards = cardsArray;
        this.filteredCards = cardsArray;
      }
    );
  }

  filterCardsByRarity(rarityFilter: string): void {
    this.initCardsFilters();
    if (rarityFilter === 'init') {
      return;
    }
    this.filteredCards = this.filteredCards.filter(function(card) {
      return card.rarity === rarityFilter.toLowerCase(); 
    });
  }

  initCardsFilters(): void {
    this.filteredCards = this.cards;
  }

  /**
   * Open the Player information modal
   * @param player 
   */
  openPlayerInfos(player: Player): void {
    const dialogRef = this.dialog.open(PlayerInfosModalComponent, {
      height: '600px',
      width: '700px',
      data: {
        player: player
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
