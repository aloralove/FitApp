import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';

import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  constructor() { }

  ngOnInit(): void {
  }

  
setView(view: CalendarView) {
  this.view = view;
}




}
