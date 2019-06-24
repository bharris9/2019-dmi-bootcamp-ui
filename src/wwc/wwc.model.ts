import { ScoreItem } from '../shared/team-score/team-score.model';

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

export interface WwcBoxScore extends ScoreItem {
  tvBroadcast: string;
  homeScore: WwcBoxScoreItem;
  awayScore: WwcBoxScoreItem;
}

export interface WwcBoxScoreItem extends ScoreItem {
  logo: string;
}
