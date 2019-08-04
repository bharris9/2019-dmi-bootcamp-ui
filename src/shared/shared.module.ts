import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxScoreComponent } from './box-score/box-score.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { LeagueSelectorComponent } from './league-selector/league-selector.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialModule } from './material.module';
import { ScoreCardComponent } from './score-card/score-card.component';
import { TeamScoreComponent } from './team-score/team-score.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    TeamScoreComponent,
    ScoreCardComponent,
    BoxScoreComponent,
    DatePickerComponent,
    LoadingSpinnerComponent,
    LeagueSelectorComponent
  ],
  exports: [
    TeamScoreComponent,
    ScoreCardComponent,
    BoxScoreComponent,
    DatePickerComponent,
    LoadingSpinnerComponent,
    LeagueSelectorComponent
  ],
  providers: []
})
export class SharedModule {}
