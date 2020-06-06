import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DateFormatter } from '../shared/date-formatter';
import { MlbBoxScore, MlbScore } from './mlb.model';

@Injectable()
export class MlbService {
  constructor(private http: HttpClient) {}

  getScores(date: Date): Observable<MlbScore[]> {
    const yyyymmdd = DateFormatter.yyyymmdd(date);
    return this.http.get<MlbScore[]>(
      `${environment.apiUrl}/scores/mlb?date=${yyyymmdd}`
    );
  }

  getBoxScore(id: string): Observable<MlbBoxScore> {
    return timer(0, 30000).pipe(
      flatMap(res => {
        return this.http.get<MlbBoxScore>(
          `${environment.apiUrl}/scores/mlb/${id}`
        );
      })
    );
  }
}
