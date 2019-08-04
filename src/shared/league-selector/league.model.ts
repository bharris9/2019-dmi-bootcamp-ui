export interface League {
  name: string;
  abbreviation: string;
  apiKey: string;
  logos: LeagueLogo[];
}

export interface LeagueLogo {
  href: string;
}
