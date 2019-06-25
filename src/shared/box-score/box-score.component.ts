import { Component, Input, OnInit } from '@angular/core';
import { BoxScoreItem } from './box-score.model.ts';

@Component({
  selector: 'app-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss']
})
export class BoxScoreComponent implements OnInit {
  @Input() boxScore: BoxScoreItem;

  constructor() {}

  ngOnInit() {}

  get hasGameStarted() {
    return !!this.boxScore.awayScore.score;
  }
}
