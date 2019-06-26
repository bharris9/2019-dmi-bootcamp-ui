import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { GoalsComponent } from './wwc-match/goals/goals.component';
import { StatisticsComponent } from './wwc-match/statistics/statistics.component';
import { WwcMatchComponent } from './wwc-match/wwc-match.component';
import { WwcComponent } from './wwc.component';
import { WwcService } from './wwc.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, MaterialModule],
  declarations: [WwcComponent, WwcMatchComponent, GoalsComponent, StatisticsComponent],
  providers: [WwcService]
})
export class WwcModule {}
