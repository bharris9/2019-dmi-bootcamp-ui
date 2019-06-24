import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { WwcMatchComponent } from './wwc-match/wwc-match.component';
import { WwcComponent } from './wwc.component';
import { WwcService } from './wwc.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, MaterialModule],
  declarations: [WwcComponent, WwcMatchComponent],
  providers: [WwcService]
})
export class WwcModule {}
