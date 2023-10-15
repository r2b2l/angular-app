import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { MessagesService } from '../messages.service';
import { Card } from '../models/sorare/card';
import { Player } from '../models/sorare/player';
import { Club } from '../models/sorare/club';
import { ClubStream } from '../models/sorare/club-stream';

@Injectable({
  providedIn: 'root'
})

export class ClubService {
  private apiUrl = 'http://localhost:4200/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessagesService) { }

  /**
   * Get stream of a Club informations
   */
  getClubInformations(clubSlug: string): Observable<Club> {
    const getUrl = this.apiUrl + '/sorare/club/slug/' + clubSlug;
    return this.http.get<ClubStream>(getUrl, this.httpOptions).pipe(
      map(data => data.data.football.club)
    );
  }

  /**
   * Get stream of cards affiliated to my club
   * @returns Observable
   */
  getMyClubCards(): Observable<Card[]> {
    const getUrl = this.apiUrl + '/sorare/club/myClub/cards';
    return this.http.get<Card[]>(getUrl, this.httpOptions);
  }

  /**
   * Get stream of players affiliated to a club
   */
  getClubPlayers(clubSlug: string): Observable<Player[]> {
    const getUrl = this.apiUrl + '/sorare/club/' + clubSlug + '/players';
    return this.http.get<ClubStream>(getUrl, this.httpOptions).pipe(
      map(data => data.data.football.club.activePlayers.nodes)
    );
  }

  log(message: string): void {
    this.messageService.add('Club Service: ' + message);
  }
}
