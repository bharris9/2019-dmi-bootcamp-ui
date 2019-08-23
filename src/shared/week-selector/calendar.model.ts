import { League } from '../league-selector/league.model';

export interface LeagueCalendar extends League {
  calendarStartDate: Date;
  calendarEndDate: Date;
  calendar: Calendar[];
}

export interface Calendar {
  label: string;
  startDate: Date;
  endDate: Date;
  entries: CalendarEntry[];
}

export interface CalendarEntry {
  label: string;
  detail: string;
  startDate: Date;
  endDate: Date;
}

export interface Week {
  label: string;
  startDate: Date;
  endDate: Date;
  value: number;
}
