import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NcaaFootballBoxScore } from '../ncaa-football.model';
import { NcaaFootballService } from '../ncaa-football.service';

@Component({
  selector: 'app-ncaa-football-game',
  templateUrl: './ncaa-football-game.component.html',
  styleUrls: ['./ncaa-football-game.component.scss']
})
export class NcaaFootballGameComponent implements OnInit, OnDestroy {
  boxScore: NcaaFootballBoxScore;

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private service: NcaaFootballService
  ) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.getGame(gameId);
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  private getGame(gameId: string) {
    this.service
      .getBoxScore(gameId)
      .pipe(takeUntil(this.destroyed))
      .subscribe(
        boxScore => {
          this.boxScore = boxScore;
        },
        err => console.log(err)
      );
  }

  get hasGameStarted() {
    return this.boxScore.statusType !== 'STATUS_SCHEDULED';
  }
}
