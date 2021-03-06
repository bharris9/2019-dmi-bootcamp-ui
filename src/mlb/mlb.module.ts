import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { MlbBasesComponent } from './mlb-bases/mlb-bases.component';
import { MlbBoxScoreComponent } from './mlb-box-score/mlb-box-score.component';
import { MlbStatNotesComponent } from './mlb-stats/mlb-stat-table/mlb-stat-notes/mlb-stat-notes.component';
import { MlbStatTableComponent } from './mlb-stats/mlb-stat-table/mlb-stat-table.component';
import { MlbStatsComponent } from './mlb-stats/mlb-stats.component';
import { MlbComponent } from './mlb.component';
import { MlbService } from './mlb.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    MlbComponent,
    MlbBoxScoreComponent,
    MlbStatsComponent,
    MlbStatTableComponent,
    MlbBasesComponent,
    MlbStatNotesComponent
  ],
  providers: [MlbService]
})
export class MlbModule {}
