import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WwcComponent } from './wwc.component';
import { WwcService } from './wwc.service';

@NgModule({
  imports: [CommonModule],
  declarations: [WwcComponent],
  providers: [WwcService]
})
export class WwcModule {}
