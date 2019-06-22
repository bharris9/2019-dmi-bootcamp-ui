import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WwcScore, WwcBoxScore } from './wwc.model';

@Injectable()
export class WwcService {
  constructor(private http: HttpClient) {}

  getScores(): Observable<WwcScore[]> {
    return this.http.get<WwcScore[]>('http://localhost:3000/wwc');
  }

  getBoxScore(gameId: number): Observable<WwcBoxScore> {
    return this.http.get<WwcBoxScore>(`http://localhost:3000/wwc/${gameId}`);
  }
}
