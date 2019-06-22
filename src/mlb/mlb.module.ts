import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MlbComponent } from './mlb.component';
import { MlbService } from './mlb.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatCardModule, MatGridListModule, MatButtonModule],
  declarations: [MlbComponent],
  providers: [MlbService]
})
export class MlbModule {}
