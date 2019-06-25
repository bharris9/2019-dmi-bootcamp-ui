import { ScoreItem } from '../shared/team-score/team-score.model';
import { BoxScoreItem } from '../shared/box-score/box-score.model.ts';

export interface WwcScore {
  id: string;
  name: string;
  date: Date;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
  status: string;
  shortName: string;
  completed: boolean;
  homeScore: ScoreItem;
  awayScore: ScoreItem;
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
