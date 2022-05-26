import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
//callendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ChallengesComponent } from './challenges/challenges.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutComponent,
    WorkoutDetailComponent,
    MessagesComponent,
    CalendarComponent,
    NutritionComponent,
    ChallengesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
