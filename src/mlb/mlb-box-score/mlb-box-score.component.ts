import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineScore } from 'src/shared/team-score/team-score.model';
import { MlbBoxScore } from '../mlb.model';
import { MlbService } from '../mlb.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-mlb-box-score',
  templateUrl: './mlb-box-score.component.html',
  styleUrls: ['./mlb-box-score.component.scss']
})
export class MlbBoxScoreComponent implements OnInit {
  boxScore: MlbBoxScore;
  statPage: 'home' | 'away' = 'away';

  constructor(private route: ActivatedRoute, private service: MlbService) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.service.getBoxScore(gameId).subscribe(
      boxScore => {
        this.boxScore = boxScore;
      },
      err => console.log(err)
    );
  }

  getLineScore(lineScores: LineScore[]): string[] {
    if (!!lineScores) {
      const numberOfInnings = lineScores.length > 9 ? lineScores.length : 9;
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

  showStatPage(homeAwayChange: MatButtonToggleChange) {
    this.statPage = homeAwayChange.value;
  }

  get hasGameStarted() {
    return !!this.boxScore.awayScore.score;
  }
}
