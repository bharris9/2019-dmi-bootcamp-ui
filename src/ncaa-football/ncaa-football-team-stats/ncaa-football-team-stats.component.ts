import { Component, Input } from '@angular/core';
import { NcaaFootballBoxScore } from '../ncaa-football.model';

@Component({
  selector: 'app-ncaa-football-team-stats',
  templateUrl: './ncaa-football-team-stats.component.html',
  styleUrls: ['./ncaa-football-team-stats.component.scss']
})
export class NcaaFootballTeamStatsComponent  {
  @Input() boxScore: NcaaFootballBoxScore;

  get homeStats() {
    return this.boxScore.homeTeamStats;
  }

  get awayStats() {
    return this.boxScore.awayTeamStats;
  }

}
