import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { TicketComponent } from './ticket/ticket.component';
import { CardComponent } from './dashboard/card/card.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { ConfirmComponent } from './ticket/confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SingleShowComponent,
    TicketComponent,
    CardComponent,
    ConfirmComponent,
    BookingHistoryComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ]
})
export class FeatureModule { }
