import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy
} from '@angular/core';
import { Week } from './calendar.model';
import { WeekSelectorService } from './week-selector.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent implements OnInit, OnDestroy {
  @Input()
  dateSelected: Date;

  @Input()
  sport: string;

  @Output()
  selectedWeek: EventEmitter<Week> = new EventEmitter<Week>();

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private service: WeekSelectorService) {}

  ngOnInit() {
    this.service.getCalendar(
      this.sport,
      this.dateSelected.getFullYear().toString()
    );
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }
}
