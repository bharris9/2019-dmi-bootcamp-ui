export interface ScoreItem {
  homeAway: 'home' | 'away';
  score: string;
  winner: boolean;
  teamAbbreviation: string;
  team: string;
  hits: number;
  errors: number;
  record: string;
  logo: string;
}