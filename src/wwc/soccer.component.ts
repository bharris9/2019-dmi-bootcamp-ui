import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { League } from 'src/shared/league-selector/league.model';
import { SoccerScore } from './soccer.model';
import { SoccerService } from './soccer.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})
export class SoccerComponent implements OnInit, OnDestroy {
  loadingScores = false;
  loadingLeagues = false;
  soccerScores: SoccerScore[] = [];
  leagues: League[] = [];
  selectedLeague: League;
  selectedDate: Date = new Date();

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: SoccerService, private router: Router) {}

  ngOnInit() {
    this.getLeagues();
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/soccer/' + gameId);
  }

  handleDateChanged(date: Date) {
    this.selectedDate = date;
    if (this.selectedLeague) {
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
          this.soccerScores = scores;
        },
        err => console.log(err)
      );
  }
}
