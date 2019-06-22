import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MlbBoxScore, MlbScore } from './mlb.model';

@Injectable()
export class MlbService {
  constructor(private http: HttpClient) {}

  getScores(): Observable<MlbScore[]> {
    return this.http.get<MlbScore[]>('http://localhost:3000/scores/mlb');
  }

  getBoxScore(id: string): Observable<MlbBoxScore> {
    return this.http.get<MlbBoxScore>(`http://localhost:3000/scores/mlb/${id}`);
  }
}
