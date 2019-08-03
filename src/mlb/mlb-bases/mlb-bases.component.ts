import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mlb-bases',
  templateUrl: './mlb-bases.component.html',
  styleUrls: ['./mlb-bases.component.scss']
})
export class MlbBasesComponent {
  @Input()
  runnerOnFirst: boolean;
  @Input()
  runnerOnSecond: boolean;
  @Input()
  runnerOnThird: boolean;
}
