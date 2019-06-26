import { BoxScoreItem } from '../shared/box-score/box-score.model.ts';
import { ScoreCard } from '../shared/score-card/score-card.model';

export interface WwcScore extends ScoreCard {
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
  clock: string;
}

export interface WwcBoxScore extends BoxScoreItem {
  date: Date;
  note: string;
  homeStats: WwcTeamStats;
  awayStats: WwcTeamStats;
  goals: GoalItem[];
}

export interface GoalItem {
  clock: string;
  team: string;
  ownGoal: boolean;
  player: string;
  penaltyKick: boolean;
}

export interface WwcTeamStats {
  team: string;
  logo: string;
  stats: WwcStatItem[];
}

export interface WwcStatItem
{
  name: string;
  displayValue: string;
  label: string;
}
