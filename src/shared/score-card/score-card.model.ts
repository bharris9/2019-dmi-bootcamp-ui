import { ScoreItem } from '../team-score/team-score.model';

export class ScoreCard {
  id: string;
  date: Date;
  completed: boolean;
  awayScore: ScoreItem;
  homeScore: ScoreItem;
  status: string;
  tvBroadcast: string;
  name: string;
  shortName: string;
}