import { ScoreItem } from '../team-score/team-score.model';

export class ScoreCard {
  id: string;
  date: Date;
  completed: boolean;
  awayScore: ScoreItem;
  homeScore: ScoreItem;
  status: string;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL' | 'STATUS_POSTPONED' | 'STATUS_DELAYED';
  tvBroadcast: string;
  name: string;
  shortName: string;
}
