import { Component, Input } from '@angular/core';
import { TeamBoxScore, TeamStats } from '../mlb.model';

@Component({
  selector: 'app-mlb-stats',
  templateUrl: './mlb-stats.component.html',
  styleUrls: ['./mlb-stats.component.scss']
})
export class MlbStatsComponent {
  @Input() boxScore: TeamBoxScore;

  get battingStats(): TeamStats {
    return this.boxScore.statistics.find(s => s.type === 'batting');
  }

  get pitchingStats(): TeamStats {
    return this.boxScore.statistics.find(s => s.type === 'pitching');
  }
}
