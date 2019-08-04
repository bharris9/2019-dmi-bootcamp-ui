import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { League } from './league.model';

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.scss']
})
export class LeagueSelectorComponent {
  @Input()
  leagues: League[] = [];

  @Output()
  leagueSelected: EventEmitter<League> = new EventEmitter<League>();

  selectedLeague: League;

  leagueChanged(changedValue: MatSelectChange) {
    this.selectedLeague = this.leagues.find(l => l.name === changedValue.value);
    this.leagueSelected.emit(this.selectedLeague);
  }
}
