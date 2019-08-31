import { ScoreCard } from 'src/shared/score-card/score-card.model';
import { BoxScoreItem } from 'src/shared/box-score/box-score.model.ts';
import { ScoreItem } from 'src/shared/team-score/team-score.model';

export interface NcaaFootballScore extends ScoreCard {
  quarter: number;
  awayScore: NcaaFootballScoreItem;
  homeScore: NcaaFootballScoreItem;
}

export interface NcaaFootballBoxScore extends BoxScoreItem {
  quarter: number;
  lastPlay: string;
  homeScore: NcaaFootballScoreItem;
  awayScore: NcaaFootballScoreItem;
  awayPlayerStats: NcaaFootballPlayerStats;
  homePlayerStats: NcaaFootballPlayerStats;
  awayTeamStats: NcaaFootballTeamStats;
  homeTeamStats: NcaaFootballTeamStats;
}

export interface NcaaFootballScoreItem extends ScoreItem {
  possession: boolean;
}

export interface NcaaFootballPlayerStats {
  team: string;
  statistics: PlayerStats[];
}

export interface BoxScorePlayer {
  name: string;
  notes: string;
  stats: string[];
}

export interface PlayerStats {
  type: string;
  descriptions: string[];
  labels: string[];
  players: BoxScorePlayer[];
  totals: string[];
}

export interface NcaaFootballTeamStats {
  team: string;
  teamAbbreviation: string;
  logo: string;
  stats: NcaaFootballTeamStatItem[];
}

export interface NcaaFootballTeamStatItem {
  name: string;
  displayValue: string;
  label: string;
}
