import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../../club.service';
import { Club } from 'src/app/models/sorare/club';
import { Player } from 'src/app/models/sorare/player';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
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


  constructor(private clubService: ClubService, private activatedroute: ActivatedRoute) {
    this.slug = String(this.activatedroute.snapshot.paramMap.get("slug"));
    this.club$ = this.clubService.getClubInformations(this.slug);
    this.players$ = this.clubService.getClubPlayers(this.slug);
  }

  ngOnInit(): void {
    this.players$.subscribe(
      nodes => {
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

  log(a: any) {
    console.log(a);
  }
}
