import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  singleShowData:any=[];
  showTimes=[
    {"time":"9:00AM"},
    {"time":"11:30AM"},
    {"time":"1:00PM"},
    {"time":"3:00PM"},
    {"time":"4:45PM"},
    {"time":"6:15AM"},
    {"time":"8:00PM"},
  ]
  constructor(private api:ApiService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getShowById();
  }

  getShowById( ){
    const show_id = this.router.snapshot.params['id']
    this.api.getShowById(show_id)
    .subscribe((resp)=> {
     this.singleShowData = resp; 
    });

  }  

}
