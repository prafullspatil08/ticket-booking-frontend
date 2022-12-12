import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {
  history: any = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getHistory().subscribe((res) => {
      this.history = res;
    });
  }
}
