import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WwcBoxScore, WwcScore } from './wwc.model';

@Injectable()
export class WwcService {
  constructor(private http: HttpClient) {}

  getScores(date: Date): Observable<WwcScore[]> {
    const yyyymmdd = this.yyyymmdd(date);
    return this.http.get<WwcScore[]>(`${environment.apiUrl}/scores/soccer/fifa.wwc?date=${yyyymmdd}`);
  }

  getBoxScore(id: string): Observable<WwcBoxScore> {
    return this.http.get<WwcBoxScore>(`${environment.apiUrl}/scores/soccer/fifa.wwc/${id}`);
  }

  private yyyymmdd(dateIn) {
    const yyyy = dateIn.getFullYear();
    const mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    const dd = dateIn.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
  }
}
