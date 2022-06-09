import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import startOfDay from 'date-fns/startOfDay';
import startOfWeek from 'date-fns/startOfWeek/index.js';

import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';

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
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Work',
      allDay: true,
      
    },
    {
      start: startOfWeek(new Date()),
      title: 'Fun',
    }
  ]

}
