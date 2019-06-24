import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ScoreItem } from '../team-score/team-score.model';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent {
  @Input()
  score: ScoreItem;

  @Output()
  boxClicked: EventEmitter<number> = new EventEmitter<number>();

  handleBoxClick(gameId: number) {
    this.boxClicked.emit(gameId);
  }
}
