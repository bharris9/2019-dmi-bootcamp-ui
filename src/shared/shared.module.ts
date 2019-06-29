import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxScoreComponent } from './box-score/box-score.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MaterialModule } from './material.module';
import { ScoreCardComponent } from './score-card/score-card.component';
import { TeamScoreComponent } from './team-score/team-score.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [TeamScoreComponent, ScoreCardComponent, BoxScoreComponent, DatePickerComponent],
  exports: [TeamScoreComponent, ScoreCardComponent, BoxScoreComponent, DatePickerComponent],
  providers: []
})
export class SharedModule {}
