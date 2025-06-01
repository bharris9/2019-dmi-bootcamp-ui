import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LineScore } from 'src/shared/team-score/team-score.model';
import { MlbBoxScore } from '../mlb.model';
import { MlbService } from '../mlb.service';

@Component({
  selector: 'app-mlb-box-score',
  templateUrl: './mlb-box-score.component.html',
  styleUrls: ['./mlb-box-score.component.scss']
})
export class MlbBoxScoreComponent implements OnInit, OnDestroy {
  boxScore: MlbBoxScore;
  statPage: 'home' | 'away' = 'away';

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private service: MlbService) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.getGame(gameId);
  }

  ngOnDestroy(): void {
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

  getLineScore(lineScores: LineScore[]): string[] {
    if (lineScores) {
      const numberOfInnings =
        this.boxScore && this.boxScore.awayScore.lineScores.length > 9
          ? this.boxScore.awayScore.lineScores.length
          : 9;
      return Array.from({ length: numberOfInnings }).map((u, i) =>
        lineScores[i] ? lineScores[i].displayValue.toString() : ''
      );
    } else {
      return Array.from({ length: 9 }).map((u, i) => {
        const inning = i + 1;
        return inning.toString();
      });
    }
  }

  showStatPage(homeAwayChange: MatButtonToggleChange): void {
    this.statPage = homeAwayChange.value;
  }

  get hasGameStarted(): boolean {
    return this.boxScore.statusType !== 'STATUS_SCHEDULED';
  }
}
