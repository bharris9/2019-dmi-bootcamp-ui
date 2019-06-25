import { ScoreItem } from '../team-score/team-score.model';

export interface BoxScoreItem {
  id: string;
  homeScore: ScoreItem;
  awayScore: ScoreItem;
  status: string;
  tvBroadcast: string;
  completed: boolean;
  shortName: string;
}
