import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MlbBoxScore, MlbScore } from './mlb.model';

@Injectable()
export class MlbService {
  constructor(private http: HttpClient) {}

  getScores(): Observable<MlbScore[]> {
    return this.http.get<MlbScore[]>('http://localhost:3000/scores/mlb');
  }

  getBoxScore(id: string): Observable<MlbBoxScore> {
    return timer(0, 30000).pipe(
      flatMap(res => {
        return this.http.get<MlbBoxScore>(
          `http://localhost:3000/scores/mlb/${id}`
        );
      })
    );
  }
}
