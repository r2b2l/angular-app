import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Football } from '../models/sorare/football';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:4200/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPlayerDetails(slug: string): Observable<any> {
    const getUrl = this.apiUrl + '/sorare/player/slug/' + slug;
    return this.http.get<Football>(getUrl, this.httpOptions);
  }
}
