import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { SoccerComponent } from './soccer.component';
import { SoccerService } from './soccer.service';
import { GoalsComponent } from './wwc-match/goals/goals.component';
import { SoccerMatchComponent } from './wwc-match/soccer-match.component';
import { StatisticsComponent } from './wwc-match/statistics/statistics.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, MaterialModule],
  declarations: [
    SoccerComponent,
    SoccerMatchComponent,
    GoalsComponent,
    StatisticsComponent
  ],
  providers: [SoccerService]
})
export class SoccerModule {}
