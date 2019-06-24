import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/shared/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { MlbBoxScoreComponent } from './mlb-box-score/mlb-box-score.component';
import { MlbComponent } from './mlb.component';
import { MlbService } from './mlb.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule, SharedModule],
  declarations: [MlbComponent, MlbBoxScoreComponent],
  providers: [MlbService]
})
export class MlbModule {}
