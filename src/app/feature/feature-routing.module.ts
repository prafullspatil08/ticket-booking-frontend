import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../auth/page-not-found/page-not-found.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { ConfirmComponent } from './ticket/confirm/confirm.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:type', component: DashboardComponent },
  { path: 'ticket/:id',component: TicketComponent },
  { path: 'show-details/:id', component: SingleShowComponent },
  { path: 'confirm/:id',canActivate:[AuthGuard], component: ConfirmComponent },
  { path: 'history', component: BookingHistoryComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
