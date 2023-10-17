import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { Player } from 'src/app/models/sorare/player';
import { PlayerService } from '../../player.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-player-infos-modal',
  templateUrl: './player-infos-modal.component.html',
  styleUrls: ['./player-infos-modal.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatProgressSpinnerModule, RouterModule, MatSliderModule, MatCardModule]
})
export class PlayerInfosModalComponent implements OnInit, OnDestroy {
  player: Player;
  scoreNode: Array<any>;
  SO5Average: number;
  SO15Average: number;
  SO50Average: number;
  color: ThemePalette = "primary";
  spinnerMode: ProgressSpinnerMode = 'determinate';
  subscription: any;

  constructor(
    public dialogRef: MatDialogRef<PlayerInfosModalComponent>,
    private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.player = data.player;
    this.scoreNode = [];
    this.SO5Average = 0;
    this.SO15Average = 0;
    this.SO50Average = 0;
  }

  /**
   * ToDo: Modifier la classe css de l'image du joueur pour jouer sur le padding top
   * Implementer AfterViewInit et @ViewChild de Angular Core
   * const imageElement: HTMLImageElement = this.myImageElement.nativeElement;
   *
   * // Check if the image has loaded
   * if (imageElement.complete) {
   *   this.logImageHeight(imageElement);
   * } else {
   *   // If the image hasn't loaded yet, wait for the 'load' event
   *   imageElement.onload = () => this.logImageHeight(imageElement);
   * }
   */

  ngOnInit(): void {
    // Call player details
    this.subscription = this.playerService.getPlayerDetails(this.player.slug).subscribe(
      data => {
        this.player = data.data.football.player;
        this.scoreNode = data.data.football.player.allSo5Scores.nodes;

        // Calculate averages
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
        }
        this.SO50Average = scoresSum / 50;
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Call the unsubscribe to prevent memory leak since the modal is standalone
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
