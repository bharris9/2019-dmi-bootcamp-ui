import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { WwcScore } from './wwc.model';
import { WwcService } from './wwc.service';

@Component({
  selector: 'app-wwc',
  templateUrl: './wwc.component.html',
  styleUrls: ['./wwc.component.scss']
})
export class WwcComponent implements OnInit, OnDestroy {
  loadingScores = false;
  wwcScores: WwcScore[] = [];

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: WwcService, private router: Router) {}

  ngOnInit() {
    this.getScores(new Date());
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/wwc/' + gameId);
  }

  handleDateChanged(date: Date) {
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
          this.wwcScores = scores;
        },
        err => console.log(err)
      );
  }
}
