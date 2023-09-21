import { Component, OnInit, Inject, NgModule } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ClubService } from '../club.service';
import { Card } from 'src/app/models/sorare/card';
import { Player } from 'src/app/models/sorare/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-my-club',
  templateUrl: './my-club.component.html',
  styleUrls: ['./my-club.component.scss']
})

export class MyClubComponent implements OnInit {
  cards: Card[] = [];
  constructor(private clubService: ClubService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.getCards();
  }

  getCards(): void {
    this.clubService.getMyClubCards().subscribe(
      cardsArray => this.cards = cardsArray
      );
  }

  openPlayerInfos(player: Player): void {
    const dialogRef = this.dialog.open(PlayerInfosDialog, {
      height: '400px',
      width: '600px',
      data: {
        player: player
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'player-infos-dialog',
  templateUrl: './player-infos-dialog.html',
  standalone: true,
  imports: [MatButtonModule]
})

export class PlayerInfosDialog implements OnInit {
  player: Player;

  constructor(
    public dialogRef: MatDialogRef<PlayerInfosDialog>,
    private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.player = data.player;
  }

  ngOnInit(): void {
    // Call player details
    this.playerService.getPlayerDetails(this.player.slug).subscribe(
      player => this.player = player
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
