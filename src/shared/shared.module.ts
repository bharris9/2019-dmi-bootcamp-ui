import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ScoreCardComponent } from './score-card/score-card.component';
import { TeamScoreComponent } from './team-score/team-score.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [TeamScoreComponent, ScoreCardComponent],
  exports: [TeamScoreComponent, ScoreCardComponent],
  providers: []
})
export class SharedModule {}
