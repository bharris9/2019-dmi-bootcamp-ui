import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mlb-stat-notes',
  templateUrl: './mlb-stat-notes.component.html',
  styleUrls: ['./mlb-stat-notes.component.scss']
})
export class MlbStatNotesComponent {
  @Input() notes: string[] = [];
}
