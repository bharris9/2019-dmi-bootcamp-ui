import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { League } from 'src/shared/league-selector/league.model';
import { SoccerBoxScore, SoccerScore } from './soccer.model';

@Injectable()
export class SoccerService {
  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${environment.apiUrl}/leagues/soccer`);
  }

  getScores(date: Date, league: string): Observable<SoccerScore[]> {
    const yyyymmdd = this.yyyymmdd(date);
    return this.http.get<SoccerScore[]>(`${environment.apiUrl}/scores/soccer/${league}?date=${yyyymmdd}`);
  }

  getBoxScore(id: string, league: string): Observable<SoccerBoxScore> {
    return this.http.get<SoccerBoxScore>(`${environment.apiUrl}/scores/soccer/${league}/${id}`);
  }

  private yyyymmdd(dateIn) {
    const yyyy = dateIn.getFullYear();
    const mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    const dd = dateIn.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
  }
}
