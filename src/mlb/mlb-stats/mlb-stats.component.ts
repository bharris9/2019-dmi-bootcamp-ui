import { Component, OnInit, Input } from '@angular/core';
import { ScoreItem } from 'src/shared/team-score/team-score.model';

@Component({
  selector: 'app-mlb-stats',
  templateUrl: './mlb-stats.component.html',
  styleUrls: ['./mlb-stats.component.scss']
})
export class MlbStatsComponent implements OnInit {
  @Input() scoreItem: ScoreItem;

  constructor() {}

  ngOnInit() {}
}
