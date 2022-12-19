import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  public show: any = [];
  rows: string[] = ['A', 'B', 'C', 'D', 'E'];
  cols: number[] = [1, 2, 3, 4, 5];
  selected: string[] = [];
  reserved: string[] = [];
  totalPrice: number = 0;
  seatDetails: any = [];
  user = JSON.parse(localStorage.getItem('user')!);
  localReserved: any;
  isLoggedIn: boolean = false;
  isLoggedIn2: boolean = false;
  localUser: any;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getShowById();
    this.getReservedSeat();
  }

  getReservedSeat() {
    this.api.getSeatDetails().subscribe((res:any)=> {
      res.forEach((bookingDetails:any)=>{
       if(bookingDetails.showId == this.show.id){
        let obj = [bookingDetails];
        obj.forEach((a:any)=> {
          this.mergerArray(a.reserved)
        })
       }
      })
    })
  }

  mergerArray(data: any) {
    data.forEach((a: any) => {
      this.reserved = this.reserved.concat(a);
    });
  }

  getShowById() {
    this.api.getShowById(this.route.snapshot.params['id']).subscribe((resp) => {
      this.show = resp;
    });
  }

  onSeatClicked(seatPosition: string) {
    let i = this.selected.indexOf(seatPosition);

    if (i !== -1) {
      this.selected.splice(i, 1);
    } else {
      if (this.reserved.indexOf(seatPosition) === -1)
        this.selected.push(seatPosition);
    }
  }

  seatStatus(seatPosition: string) {
    if (this.reserved.indexOf(seatPosition) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPosition) !== -1) {
      return 'selected';
    } else {
      return 0;
    }
  }

  clearSeats() {
    this.selected = [];
  }

  bookSeat() {
    if (this.selected.length > 0) {
      this.api.loggedIn$.subscribe((res) => {
        this.isLoggedIn = res;
      });
      if (this.isLoggedIn) {
        const data = {
          name: this.user.name,
          email: this.user.email,
          mobile: this.user.mobile,
          reserved: this.selected,
          showId:this.show.id,
          showName: this.show.name,
          showDate: this.show.date
        };
        this.api.saveSeatDetails(data).subscribe((res) => {});
        alert('Book Successfully');
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.setItem('reservedSeats', JSON.stringify(this.selected));
        this.api.auth.next(true);
        this.router.navigateByUrl('confirm/' + this.show.id);
      }
    } else {
      alert('No seats selected!');
    }
  }
}
