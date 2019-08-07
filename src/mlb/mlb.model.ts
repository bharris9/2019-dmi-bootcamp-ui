import { BoxScoreItem } from 'src/shared/box-score/box-score.model.ts';
import { ScoreCard } from '../shared/score-card/score-card.model';

export interface MlbScore extends ScoreCard {
  inning: number;
  currentSituation: BoxScoreSituation;
}

export interface MlbBoxScore extends BoxScoreItem {
  inning: number;
  lastPlay: string;
  currentSituation: BoxScoreSituation;
  homeBoxScore: TeamBoxScore;
  awayBoxScore: TeamBoxScore;
}

export interface TeamBoxScore {
  team: string;
  statistics: TeamStats[];
}

export interface TeamStats {
  type: string;
  descriptions: string[];
  labels: string[];
  players: BoxScorePlayer[];
  totals: string[];
}

export interface BoxScorePlayer {
  active: boolean;
  battingOrder: number;
  name: string;
  notes: string;
  number: string;
  position: string;
  starter: boolean;
  stats: string[];
}

export interface BoxScoreSituation {
  balls: number;
  strikes: number;
  outs: number;
  onFirst: boolean;
  onSecond: boolean;
  onThird: boolean;
}
