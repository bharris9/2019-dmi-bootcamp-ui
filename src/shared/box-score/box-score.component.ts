import { Component, Input } from '@angular/core';
import { BoxScoreItem } from './box-score.model.ts';

@Component({
  selector: 'app-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss']
})
export class BoxScoreComponent {
  @Input() boxScore: BoxScoreItem;

  get hasGameStarted() {
    return !!this.boxScore.awayScore.score;
  }
}
