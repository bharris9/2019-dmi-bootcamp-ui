import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { League } from 'src/shared/league-selector/league.model';
import { DateFormatter } from '../shared/date-formatter';
import { SoccerBoxScore, SoccerScore } from './soccer.model';

@Injectable()
export class SoccerService {
  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${environment.apiUrl}/leagues/soccer`);
  }

  getScores(date: Date, league: string): Observable<SoccerScore[]> {
    const yyyymmdd = DateFormatter.yyyymmdd(date);
    return this.http.get<SoccerScore[]>(
      `${environment.apiUrl}/scores/soccer/${league}?date=${yyyymmdd}`
    );
  }

  getBoxScore(id: string, league: string): Observable<SoccerBoxScore> {
    return timer(0, 30000).pipe(
      flatMap(res => {
        return this.http.get<SoccerBoxScore>(
          `${environment.apiUrl}/scores/soccer/${league}/${id}`
        );
      })
    );
  }
}
