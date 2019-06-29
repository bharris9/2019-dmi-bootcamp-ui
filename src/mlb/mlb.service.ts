import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MlbBoxScore, MlbScore } from './mlb.model';

@Injectable()
export class MlbService {
  constructor(private http: HttpClient) {}

  getScores(date: Date): Observable<MlbScore[]> {
    const yyyymmdd = this.yyyymmdd(date);
    return this.http.get<MlbScore[]>(`http://localhost:3000/scores/mlb?date=${yyyymmdd}`);
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

  private yyyymmdd(dateIn) {
    const yyyy = dateIn.getFullYear();
    const mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    const dd = dateIn.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
  }
}
