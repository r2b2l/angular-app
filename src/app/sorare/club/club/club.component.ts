import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../../club.service';
import { Player } from 'src/app/models/sorare/player';
import { Observable } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PlayerInfosModalComponent } from '../../player/player-infos-modal/player-infos-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit, AfterViewInit {
  slug: string;
  club$: Observable<any>;
  players$!: Observable<any>;
  positionCounts = {
    coach: 0,
    goalkeepers: 0,
    defenders: 0,
    midfielders: 0,
    forwards: 0
  };
  displayedColumns: string[] = ['position', 'pictureUrl' , 'displayName', 'fiveSo5Average', 'fifteenSo15Average', 'lastFiveSo5Appearances', 'lastFifteenSo5Appearances'];
  playersSource = new MatTableDataSource<Player>([]);


  constructor(private clubService: ClubService, private activatedroute: ActivatedRoute, public dialog: MatDialog) {
    this.slug = String(this.activatedroute.snapshot.paramMap.get("slug"));
    this.club$ = this.clubService.getClubInformations(this.slug);
    this.players$ = this.clubService.getClubPlayers(this.slug);
  }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngOnInit(): void {
    this.players$.subscribe(
      nodes => {
        // Filter nodes by position ASC
        nodes.sort((a: any, b: any) => {
          return a.position < b.position ? -1: 1;
        });
        this.playersSource = new MatTableDataSource<Player>(nodes);
        nodes.forEach((value: Player) => {
          switch (value.position.toUpperCase()) {
            case 'GOALKEEPER': {
              this.positionCounts.goalkeepers++;
              break;
            }
            case 'DEFENDER': {
              this.positionCounts.defenders++;
              break;
            }
            case 'MIDFIELDER': {
              this.positionCounts.midfielders++;
              break;
            }
            case 'FORWARD': {
              this.positionCounts.forwards++;
              break;
            }
            case 'COACH': {
              this.positionCounts.coach++;
              break;
            }
            default: {
              throw new Error('Falling here cant happen');
            }
          }
        });
      }
    )
  }

  ngAfterViewInit() {
    this.playersSource.sort = this.sort;
  }

  /**
   * Sort the Player Table
   */
  sortData(): void {
    this.playersSource.sort = this.sort;
  }

  /**
   * Open Single player Modal
   * @param row 
   */
  openPlayerModal(row: any) {
    console.log(row); // row.slug
    const dialogRef = this.dialog.open(PlayerInfosModalComponent, {
      height: '600px',
      width: '700px',
      data: {
        player: row
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  log(a: any) {
    console.log(a);
  }
}
