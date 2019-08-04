import { Component, Input, OnInit } from '@angular/core';
import { GoalItem } from 'src/wwc/soccer.model';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  @Input()
  homeTeam: string;

  @Input()
  awayTeam: string;

  @Input()
  goals: GoalItem[] = [];

  awayGoals: GoalItem[] = [];
  homeGoals: GoalItem[] = [];

  ngOnInit() {
    this.awayGoals = this.getGoals(this.awayTeam);
    this.homeGoals = this.getGoals(this.homeTeam);
  }

  private getGoals(team: string) {
    return this.goals.filter(g => g.team === team);
  }
}
