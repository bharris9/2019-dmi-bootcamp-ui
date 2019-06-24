import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MlbBoxScore, LineScore } from '../mlb.model';
import { MlbService } from '../mlb.service';

@Component({
  selector: 'app-mlb-box-score',
  templateUrl: './mlb-box-score.component.html',
  styleUrls: ['./mlb-box-score.component.scss']
})
export class MlbBoxScoreComponent implements OnInit {
  boxScore: MlbBoxScore;

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

  private getLineScore(lineScores: LineScore[]): string[] {
    const numberOfInnings = lineScores.length > 9 ? lineScores.length : 9;
    return Array.from({ length: numberOfInnings }).map((u, i) =>
      lineScores[i] ? lineScores[i].displayValue.toString() : ''
    );
  }

  get hasGameStarted() {
    return !!this.boxScore.awayScore.score;
  }
}
