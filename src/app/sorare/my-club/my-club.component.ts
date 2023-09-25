import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ClubService } from '../club.service';
import { Card } from 'src/app/models/sorare/card';
import { Player } from 'src/app/models/sorare/player';
import { PlayerService } from '../player.service';
import { CommonModule } from '@angular/common';
import { Football } from 'src/app/models/sorare/football';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-my-club',
  templateUrl: './my-club.component.html',
  styleUrls: ['./my-club.component.scss']
})

export class MyClubComponent implements OnInit {
  cards: Card[] = [];
  constructor(private clubService: ClubService, public dialog: MatDialog) { }

  ngOnInit(): void {
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
  styleUrls: ['./my-club.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatProgressSpinnerModule]
})

export class PlayerInfosDialog implements OnInit {
  player: Player;
  scoreNode: Array<any>;
  SO5Average: number;
  SO15Average: number;
  SO50Average: number;
  color: ThemePalette = "primary";
  spinnerMode: ProgressSpinnerMode = 'determinate';

  constructor(
    public dialogRef: MatDialogRef<PlayerInfosDialog>,
    private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.player = data.player;
    this.scoreNode = [];
    this.SO5Average = 0;
    this.SO15Average = 0;
    this.SO50Average = 0;
  }

  ngOnInit(): void {
    // Call player details
    this.playerService.getPlayerDetails(this.player.slug).subscribe(
      data => {
        this.player = data.data.football.player;
        this.scoreNode = data.data.football.player.allSo5Scores.nodes;
        
        // Calculate the average
        let scoresSum = 0;
        for (let i = 0; i < 5; i++) {
          scoresSum = scoresSum + this.scoreNode[i].score;
        }
        this.SO5Average = scoresSum / 5;

        scoresSum = 0;
        for (let i = 0; i < 15; i++) {
          scoresSum = scoresSum + this.scoreNode[i].score;
        }
        this.SO15Average = scoresSum / 15;

        scoresSum = 0;
        for (let i = 0; i < 50; i++) {
          scoresSum = scoresSum + this.scoreNode[i].score;
          console.log(scoresSum);
        }
        this.SO50Average = scoresSum / 50;
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
