import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreCard } from './score-card.model';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent {
  @Input()
  score: ScoreCard;

  @Output()
  boxClicked: EventEmitter<number> = new EventEmitter<number>();

  handleBoxClick(gameId: number) {
    this.boxClicked.emit(gameId);
  }
}
