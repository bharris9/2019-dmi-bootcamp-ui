import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CalendarEntry, Week } from './calendar.model';
import { WeekSelectorService } from './week-selector.service';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  dateSelected: Date = new Date();

  @Input()
  sport: string;

  @Output()
  weekSelected: EventEmitter<Week> = new EventEmitter<Week>();

  selectedEntry: CalendarEntry;
  selectedWeek: Week;
  weeks: CalendarEntry[] = [];

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: WeekSelectorService) {}

  ngOnInit() {
    this.getCalendar(this.sport, this.dateSelected.getFullYear().toString());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.dateSelected &&
      changes.dateSelected.previousValue !== changes.dateSelected.currentValue
    ) {
      this.getCalendar(
        this.sport,
        changes.dateSelected.currentValue.getFullYear().toString()
      );
    }
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  private getCalendar(sport: string, date: string) {
    this.service
      .getCalendar(sport, date)
      .pipe(takeUntil(this.destroyed))
      .subscribe(
        cal => {
          const cals = cal[0].calendar.reduce(
            (prev, curr) => [...prev, curr.entries],
            []
          );
          this.weeks = cals.reduce((prev, curr) => prev.concat(curr), []);
        },
        err => console.log(err)
      );
  }

  weekChanged(changedValue: MatSelectChange) {
    const selectedEntry = this.weeks.find(e => e.label === changedValue.value);
    if (selectedEntry) {
      const weekValue = selectedEntry.label.replace('Week ', '');
      this.selectedWeek = {
        label: selectedEntry.label,
        startDate: selectedEntry.startDate,
        endDate: selectedEntry.endDate,
        value: +weekValue
      } as Week;
    } else {
      this.selectedWeek = null;
    }

    this.weekSelected.emit(this.selectedWeek);
  }
}
