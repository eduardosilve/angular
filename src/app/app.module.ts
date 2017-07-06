import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Routes
import {APP_ROUTING} from './app.routes';

//servicios
import {rankService} from './servicios/rank.service';
import {matchService} from './servicios/match.service';
import {PeticionesService} from './servicios/calendarhttp.service';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { rankAperturaComponent} from './components/rank/rankApertura.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    rankAperturaComponent,
    CalendarComponent,
    ExampleComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    rankService, matchService, PeticionesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
