import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy
} from '@angular/core';
import { Week, Calendar, CalendarEntry } from './calendar.model';
import { WeekSelectorService } from './week-selector.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent implements OnInit, OnDestroy {
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
    this.service
      .getCalendar(this.sport, this.dateSelected.getFullYear().toString())
      .pipe(takeUntil(this.destroyed))
      .subscribe(
        cal => (this.weeks = cal[0].calendar[0].entries),
        err => console.log(err)
      );
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  weekChanged(changedValue: MatSelectChange) {
    const selectedEntry = this.weeks.find(
      e => e.label === changedValue.value
    );
    if (!!selectedEntry) {
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
