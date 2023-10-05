import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages.service';
import { Card } from '../models/sorare/card';

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
     * Get stream of cards affiliated to my club
     * @returns Observable
     */
  getMyClubCards(): Observable<Card[]> {
    const getUrl = this.apiUrl + '/sorare/club/myClub/cards';
    return this.http.get<Card[]>(getUrl, this.httpOptions);
  }

  log(message: string): void {
    this.messageService.add('HeroService: ' + message);
  }
}
