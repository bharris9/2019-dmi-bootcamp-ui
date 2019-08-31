import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { NcaaFootballGameComponent } from './ncaa-football-game/ncaa-football-game.component';
import { NcaaFootballPlayerStatsComponent } from './ncaa-football-player-stats/ncaa-football-player-stats.component';
// tslint:disable-next-line:max-line-length
import { NcaaFootballStatsTableComponent } from './ncaa-football-player-stats/ncaa-football-stats-table/ncaa-football-stats-table.component';
import { NcaaFootballComponent } from './ncaa-football.component';
import { NcaaFootballService } from './ncaa-football.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    NcaaFootballComponent,
    NcaaFootballGameComponent,
    NcaaFootballPlayerStatsComponent,
    NcaaFootballStatsTableComponent
  ],
  providers: [NcaaFootballService]
})
export class NcaaFootballModule {}
