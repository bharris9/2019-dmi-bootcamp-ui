import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute } from '@angular/router';
import { faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LineScore } from 'src/shared/team-score/team-score.model';
import { NcaaFootballBoxScore } from '../ncaa-football.model';
import { NcaaFootballService } from '../ncaa-football.service';

@Component({
  selector: 'app-ncaa-football-game',
  templateUrl: './ncaa-football-game.component.html',
  styleUrls: ['./ncaa-football-game.component.scss']
})
export class NcaaFootballGameComponent implements OnInit, OnDestroy {
  faFootballBall = faFootballBall;
  boxScore: NcaaFootballBoxScore;
  statPage: 'home' | 'away' | 'summary' = 'summary';

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

  getLineScore(lineScores: LineScore[]): string[] {
    if (lineScores) {
      const numberOfQuarters = lineScores.length > 4 ? lineScores.length : 4;
      return Array.from({ length: numberOfQuarters }).map((u, i) =>
        lineScores[i] ? lineScores[i].displayValue.toString() : ''
      );
    } else {
      return Array.from({ length: 4 }).map((u, i) => {
        const quarter = i + 1;
        return quarter.toString();
      });
    }
  }

  showStatPage(homeAwayChange: MatButtonToggleChange) {
    this.statPage = homeAwayChange.value;
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
