import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { SoccerScore } from './soccer.model';
import { SoccerService } from './soccer.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})
export class SoccerComponent implements OnInit, OnDestroy {
  loadingScores = false;
  soccerScores: SoccerScore[] = [];

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: SoccerService, private router: Router) {}

  ngOnInit() {
    this.getScores(new Date());
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/soccer/' + gameId);
  }

  handleDateChanged(date: Date) {
    this.getScores(date);
  }

  private getScores(date: Date) {
    this.loadingScores = true;
    this.service
      .getScores(date, 'fifa.wwc')
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
