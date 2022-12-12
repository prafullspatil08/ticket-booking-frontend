import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  movie: any;
  reservedSeats:any= [];
  displaySeat:any;
  bookingForm!:FormGroup
  totalPrice:any;

  constructor(private fb:FormBuilder,private api:ApiService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.bookingForm = this.fb.group({
      name:['',[Validators.minLength(2),Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.minLength(10),Validators.required]]
    });
    try {

      this.api.getShowById(this.route.snapshot.params['id']).subscribe((res) => {
        this.movie = res
      })
    } catch (error) {
      console.log(error)
    }
    this.reservedSeats=localStorage.getItem("reservedSeats");
    this.displaySeat=JSON.parse(this.reservedSeats)
  }

  onBook(form:any){
     const data = {
        name:form.name,
        email:form.email,
        mobile:form.mobile,
        reserved: this.displaySeat,
        showId: this.movie.id
      }
      this.api.saveSeatDetails(data).subscribe((res) => {
      });
      alert('Book Successfully');
      this.router.navigate(['/dashboard']);
      localStorage.clear();
  }
}
