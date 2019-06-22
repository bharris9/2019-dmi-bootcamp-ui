import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WwcComponent } from './wwc.component';
import { WwcService } from './wwc.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [WwcComponent],
  providers: [WwcService]
})
export class WwcModule {}
