import { Component, Input } from '@angular/core';
import { TeamStats } from 'src/mlb/mlb.model';
import { BoxScorePlayer } from '../../mlb.model';

@Component({
  selector: 'app-mlb-stat-table',
  templateUrl: './mlb-stat-table.component.html',
  styleUrls: ['./mlb-stat-table.component.scss']
})
export class MlbStatTableComponent {
  @Input() teamStats: TeamStats;
  @Input() type: 'pitching' | 'batting' = 'batting';

  getNote(player: BoxScorePlayer): string {
    return player.notes?.length > 0 ? this.formatNotes(player.notes) : null;
  }

  private formatNotes(notes: string): string {
    return this.type === 'batting' ? ` - ${notes.substring(0, 1)}` : notes;
  }
}
