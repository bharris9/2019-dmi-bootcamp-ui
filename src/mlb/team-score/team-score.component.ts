import { Component, Input } from '@angular/core';
import { MlbScoreItem } from '../mlb.model';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent {
  @Input() scoreItem: MlbScoreItem;
}
