import { Component, Input } from '@angular/core';
import { NcaaFootballPlayerStats } from '../ncaa-football.model';

@Component({
  selector: 'app-ncaa-football-player-stats',
  templateUrl: './ncaa-football-player-stats.component.html',
  styleUrls: ['./ncaa-football-player-stats.component.scss']
})
export class NcaaFootballPlayerStatsComponent {
  @Input()
  playerStats: NcaaFootballPlayerStats;
}
