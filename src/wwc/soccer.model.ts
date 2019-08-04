import { BoxScoreItem } from '../shared/box-score/box-score.model.ts';
import { ScoreCard } from '../shared/score-card/score-card.model';

export interface SoccerScore extends ScoreCard {
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
  clock: string;
}

export interface SoccerBoxScore extends BoxScoreItem {
  date: Date;
  note: string;
  homeStats: SoccerTeamStats;
  awayStats: SoccerTeamStats;
  goals: GoalItem[];
}

export interface GoalItem {
  clock: string;
  team: string;
  ownGoal: boolean;
  player: string;
  penaltyKick: boolean;
}

export interface SoccerTeamStats {
  team: string;
  logo: string;
  stats: SoccerStatItem[];
}

export interface SoccerStatItem
{
  name: string;
  displayValue: string;
  label: string;
}
