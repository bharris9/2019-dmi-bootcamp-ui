import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-scores',
  templateUrl: './no-scores.component.html',
  styleUrls: ['./no-scores.component.scss']
})
export class NoScoresComponent {
  @Input()
  sportName: string;
}
