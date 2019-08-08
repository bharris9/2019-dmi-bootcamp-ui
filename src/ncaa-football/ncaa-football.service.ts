import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DateFormatter } from 'src/shared/date-formatter';
import { League } from 'src/shared/league-selector/league.model';
import { NcaaFootballBoxScore, NcaaFootballScore } from './ncaa-football.model';

@Injectable()
export class NcaaFootballService {
  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(
      `${environment.apiUrl}/leagues/ncaa-football`
    );
  }

  getScores(date: Date, league: string): Observable<NcaaFootballScore[]> {
    const yyyymmdd = DateFormatter.yyyymmdd(date);
    return this.http.get<NcaaFootballScore[]>(
      `${environment.apiUrl}/scores/ncaa-football?date=${yyyymmdd}&group=${league}`
    );
  }

  getBoxScore(id: string): Observable<NcaaFootballBoxScore> {
    return timer(0, 30000).pipe(
      flatMap(res => {
        return this.http.get<NcaaFootballBoxScore>(
          `${environment.apiUrl}/scores/ncaa-football/${id}`
        );
      })
    );
  }
}
