import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NcaaFootballGameComponent } from './ncaa-football-game/ncaa-football-game.component';
import { NcaaFootballScoresComponent } from './ncaa-football-scores/ncaa-football-scores.component';
import { NcaaFootballComponent } from './ncaa-football.component';

const routes: Routes = [
  {
    path: 'ncaa-football',
    component: NcaaFootballComponent,
    children: [
      {
        path: 'scores',
        component: NcaaFootballScoresComponent
      },
      {
        path: ':id',
        component: NcaaFootballGameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaaFootballRoutingModule {}
