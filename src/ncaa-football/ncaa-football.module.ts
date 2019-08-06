import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { NcaaFootballComponent } from './ncaa-football.component';
import { NcaaFootballService } from './ncaa-football.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  declarations: [NcaaFootballComponent],
  providers: [NcaaFootballService]
})
export class NcaaFootballModule {}
