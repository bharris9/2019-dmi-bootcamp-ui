import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { League } from 'src/shared/league-selector/league.model';
import { NcaaFootballScore } from './ncaa-football.model';
import { NcaaFootballService } from './ncaa-football.service';
import { Week } from '../shared/week-selector/calendar.model';

@Component({
  selector: 'app-ncaa-football',
  templateUrl: './ncaa-football.component.html',
  styleUrls: ['./ncaa-football.component.scss']
})
export class NcaaFootballComponent implements OnInit, OnDestroy {
  loadingScores = false;
  loadingLeagues = false;
  scores: NcaaFootballScore[] = [];
  leagues: League[] = [];
  selectedLeague: League;
  selectedDate: Date = new Date();
  selectedWeek: number = null;

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: NcaaFootballService, private router: Router) {}

  ngOnInit() {
    this.selectedWeek = 1;
    this.getLeagues();
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/ncaa-football/' + gameId);
  }

  handleDateChanged(date: Date) {
    this.selectedDate = date;
    if (!!this.selectedLeague && !!this.selectedWeek) {
      this.getScores(
        this.selectedDate,
        this.selectedLeague.apiKey,
        this.selectedWeek
      );
    }
  }

  handleWeekChanged(week: Week) {
    this.selectedWeek = week.value;
    if (!!this.selectedWeek && !!this.selectedLeague) {
      this.getScores(
        this.selectedDate,
        this.selectedLeague.apiKey,
        this.selectedWeek
      );
    }
  }

  handleLeagueChanged(league: League) {
    this.selectedLeague = league;
    if (!!this.selectedWeek) {
      this.getScores(
        this.selectedDate,
        this.selectedLeague.apiKey,
        this.selectedWeek
      );
    }
  }

  private getLeagues() {
    this.loadingLeagues = true;
    this.service
      .getLeagues()
      .pipe(
        finalize(() => (this.loadingLeagues = false)),
        takeUntil(this.destroyed)
      )
      .subscribe(
        leagues => {
          this.leagues = leagues;
        },
        err => console.log(err)
      );
  }

  private getScores(date: Date, leagueApiKey: string, week: number) {
    this.loadingScores = true;
    this.service
      .getScores(date, leagueApiKey, week)
      .pipe(
        finalize(() => {
          this.loadingScores = false;
        }),
        takeUntil(this.destroyed)
      )
      .subscribe(
        scores => {
          this.scores = scores.sort(
            (a, b) => Number(a.completed) - Number(b.completed)
          );
        },
        err => console.log(err)
      );
  }
}
