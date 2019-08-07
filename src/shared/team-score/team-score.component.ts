import { Component, Input } from '@angular/core';
import { ScoreItem } from './team-score.model';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent {
  @Input()
  scoreItem: ScoreItem;

  @Input()
  displayScore = true;
}
