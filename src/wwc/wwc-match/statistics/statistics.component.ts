import { Component, Input } from '@angular/core';
import { WwcBoxScore } from '../../wwc.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() boxScore: WwcBoxScore;

  get homeStats() {
    return this.boxScore.homeStats;
  }

  get awayStats() {
    return this.boxScore.awayStats;
  }
}
