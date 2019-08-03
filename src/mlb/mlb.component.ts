import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { MlbScore } from './mlb.model';
import { MlbService } from './mlb.service';

@Component({
  selector: 'app-mlb',
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.scss']
})
export class MlbComponent implements OnInit, OnDestroy {
  loadingScores: boolean;
  mlbScores: MlbScore[];

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: MlbService, private router: Router) {}

  ngOnInit() {
    this.getScores(new Date());
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/mlb/' + gameId);
  }

  handleDateChange(date: Date) {
    this.getScores(date);
  }

  private getScores(date: Date) {
    this.loadingScores = true;
    this.service
      .getScores(date)
      .pipe(
        finalize(() => {
          this.loadingScores = false;
        }),
        takeUntil(this.destroyed)
      )
      .subscribe(
        scores => {
          this.mlbScores = scores.sort(
            (a, b) => Number(a.completed) - Number(b.completed)
          );
        },
        err => console.log(err)
      );
  }
}
