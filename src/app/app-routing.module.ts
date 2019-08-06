import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/core/home/home.component';
import { MlbComponent } from 'src/mlb/mlb.component';
import { SoccerComponent } from 'src/wwc/soccer.component';
import { MlbBoxScoreComponent } from '../mlb/mlb-box-score/mlb-box-score.component';
import { NcaaFootballComponent } from '../ncaa-football/ncaa-football.component';
import { SoccerMatchComponent } from '../wwc/wwc-match/soccer-match.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'mlb',
    children: [
      {
        path: '',
        component: MlbComponent
      },
      {
        path: ':id',
        component: MlbBoxScoreComponent
      }
    ]
  },
  {
    path: 'soccer',
    children: [
      {
        path: '',
        component: SoccerComponent
      },
      {
        path: ':id',
        component: SoccerMatchComponent
      }
    ]
  },
  {
    path: 'ncaa-football',
    children: [
      {
        path: '',
        component: NcaaFootballComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
