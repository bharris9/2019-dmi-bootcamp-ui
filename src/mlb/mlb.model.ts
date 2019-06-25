import { ScoreItem } from 'src/shared/team-score/team-score.model';
import { BoxScoreItem } from 'src/shared/box-score/box-score.model.ts';

export interface MlbScore {
  id: string;
  name: string;
  date: Date;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
  status: string;
  shortName: string;
  completed: boolean;
  inning: number;
  homeScore: ScoreItem;
  awayScore: ScoreItem;
}

export interface MlbBoxScore extends BoxScoreItem {
  inning: number;
  lastPlay: string;
  currentSituation: BoxScoreSituation;
}

export interface BoxScoreSituation {
  balls: number;
  strikes: number;
  outs: number;
  onFirst: boolean;
  onSecond: boolean;
  onThird: boolean;
}
