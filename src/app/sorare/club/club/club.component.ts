import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../../club.service';
import { Club } from 'src/app/models/sorare/club';
import { Player } from 'src/app/models/sorare/player';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  slug: string;
  clubPlayers: Player[] = [];
  club$: Observable<any>;


  constructor(private clubService: ClubService, private activatedroute:ActivatedRoute) {
    this.slug = String(this.activatedroute.snapshot.paramMap.get("slug"));
    this.club$ = this.clubService.getClubInformations(this.slug);
  }

  ngOnInit(): void {
    this.getClubPlayers(this.slug);
  }

  getClubPlayers(slug: string): void {
    this.clubService.getClubPlayers(slug).subscribe(
      clubPlayers => this.clubPlayers = clubPlayers
    )
  }

  log(a: any) {
    console.log(a);
  }
}
