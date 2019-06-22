import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MlbComponent } from './mlb.component';
import { MlbService } from './mlb.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MlbComponent],
  providers: [MlbService]
})
export class MlbModule {}
