import { Component, Input } from '@angular/core';
import { TeamStats } from 'src/mlb/mlb.model';

@Component({
  selector: 'app-mlb-stat-table',
  templateUrl: './mlb-stat-table.component.html',
  styleUrls: ['./mlb-stat-table.component.scss']
})
export class MlbStatTableComponent {
  @Input() teamStats: TeamStats;
}
