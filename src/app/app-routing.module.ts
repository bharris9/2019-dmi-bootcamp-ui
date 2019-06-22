import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/core/home/home.component';
import { MlbComponent } from 'src/mlb/mlb.component';
import { WwcComponent } from 'src/wwc/wwc.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'mlb',
    children: [
      {
        path: '',
        component: MlbComponent
      }
    ]
  },
  {
    path: 'wwc',
    children: [
      {
        path: '',
        component: WwcComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
