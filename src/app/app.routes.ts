import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { rankAperturaComponent } from './components/rank/rankApertura.component';

const APP_ROUTES: Routes = [
  { path: 'Calendar', component: CalendarComponent },
  { path: 'ranking', component: rankAperturaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
