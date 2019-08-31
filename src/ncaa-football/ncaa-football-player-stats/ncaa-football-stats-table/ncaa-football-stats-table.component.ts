import { Component, Input } from '@angular/core';
import { PlayerStats } from 'src/ncaa-football/ncaa-football.model';

@Component({
  selector: 'app-ncaa-football-stats-table',
  templateUrl: './ncaa-football-stats-table.component.html',
  styleUrls: ['./ncaa-football-stats-table.component.scss']
})
export class NcaaFootballStatsTableComponent {
  @Input() stats: PlayerStats;
}
