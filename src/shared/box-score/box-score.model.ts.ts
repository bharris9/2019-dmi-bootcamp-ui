import { ScoreItem } from '../team-score/team-score.model';

export interface BoxScoreItem {
  id: string;
  homeScore: ScoreItem;
  awayScore: ScoreItem;
  status: string;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL' | 'STATUS_POSTPONED' | 'STATUS_DELAYED';
  tvBroadcast: string;
  completed: boolean;
  shortName: string;
}
