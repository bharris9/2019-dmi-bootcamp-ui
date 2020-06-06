import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeagueCalendar } from './calendar.model';

@Injectable()
export class WeekSelectorService {
  constructor(private http: HttpClient) {}

  getCalendar(sport: string, year: string): Observable<LeagueCalendar[]> {
    return this.http.get<LeagueCalendar[]>(
      `${environment.apiUrl}/scores/${sport}/calendar?date=${year}`
    );
  }
}
