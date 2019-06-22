import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import { MlbModule } from '../mlb/mlb.module';
import { WwcModule } from '../wwc/wwc.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MlbModule,
    WwcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
