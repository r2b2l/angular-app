import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../../club.service';
import { Club } from 'src/app/models/sorare/club';
import { Player } from 'src/app/models/sorare/player';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  slug: string;
  club!: Club;
  clubPlayers: Player[] = [];

  constructor(private clubService: ClubService, private activatedroute:ActivatedRoute) {
    this.slug = String(this.activatedroute.snapshot.paramMap.get("slug"));
  }

  ngOnInit(): void {
    this.getClubInformations(this.slug);
    this.getClubPlayers(this.slug);
  }

  getClubInformations(slug: string): void {
    this.clubService.getClubInformations(slug).subscribe(
      clubInformations => this.club = clubInformations
    )
  }

  getClubPlayers(slug: string): void {
    this.clubService.getClubPlayers(slug).subscribe(
      clubPlayers => this.clubPlayers = clubPlayers
    )
  }
}
