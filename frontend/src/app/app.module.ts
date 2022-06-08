import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//callendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutDetailComponent } from './detailworkout/detailworkout.component';
import { MessagesComponent } from './messages/messages.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { DetailchallengeComponent } from './detailchallenge/detailchallenge.component';
import { DetailnutritionComponent } from './detailnutrition/detailnutrition.component';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutComponent,
    WorkoutDetailComponent,
    MessagesComponent,
    CalendarComponent,
    NutritionComponent,
    ChallengesComponent,
    DetailchallengeComponent,
    DetailnutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
