import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { League } from 'src/shared/league-selector/league.model';
import { NcaaFootballScore } from './ncaa-football.model';
import { NcaaFootballService } from './ncaa-football.service';

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

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: NcaaFootballService, private router: Router) {}

  ngOnInit() {
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
    if (!!this.selectedLeague) {
      this.getScores(this.selectedDate, this.selectedLeague.apiKey);
    }
  }

  handleLeagueChanged(league: League) {
    this.selectedLeague = league;
    this.getScores(this.selectedDate, this.selectedLeague.apiKey);
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

  private getScores(date: Date, leagueApiKey: string) {
    this.loadingScores = true;
    this.service
      .getScores(date, leagueApiKey)
      .pipe(
        finalize(() => {
          this.loadingScores = false;
        }),
        takeUntil(this.destroyed)
      )
      .subscribe(
        scores => {
          this.scores = scores;
        },
        err => console.log(err)
      );
  }
}
