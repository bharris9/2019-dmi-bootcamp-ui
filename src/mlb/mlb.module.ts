import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MlbComponent } from './mlb.component';
import { MlbService } from './mlb.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MlbComponent],
  providers: [MlbService]
})
export class MlbModule {}
