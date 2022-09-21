import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Output() dateChanged: EventEmitter<Date> = new EventEmitter<Date>();

  startDate = new Date();
  date: UntypedFormControl;

  ngOnInit() {
    this.date = new UntypedFormControl(new Date());
  }

  handleChanges(event: MatDatepickerInputEvent<Date>) {
    this.dateChanged.emit(event.value);
  }
}
