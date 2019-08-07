import { ScoreCard } from 'src/shared/score-card/score-card.model';
import { BoxScoreItem } from 'src/shared/box-score/box-score.model.ts';

export interface NcaaFootballScore extends ScoreCard {
  quarter: number;
}

export interface NcaaFootballBoxScore extends BoxScoreItem {
  quarter: number;
  lastPlay: string;
}

