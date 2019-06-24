import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/shared/material.module';
import { MlbBoxScoreComponent } from './mlb-box-score/mlb-box-score.component';
import { MlbComponent } from './mlb.component';
import { MlbService } from './mlb.service';
import { TeamScoreComponent } from './team-score/team-score.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule],
  declarations: [MlbComponent, MlbBoxScoreComponent, TeamScoreComponent],
  providers: [MlbService]
})
export class MlbModule {}
