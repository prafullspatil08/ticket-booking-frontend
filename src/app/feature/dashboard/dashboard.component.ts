import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  movieData: any = [];
  filterType: any;
  searchKey: string = '';
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getShow();
  }

  getShow() {
    this.api.getAllShows().subscribe((res) => {
      this.movieData = res;
      this.filterType = res;
    });
  }

  filter(type: any) {
    this.router.navigate(['/dashboard/', type]);
    this.movieData = this.filterType.filter((a: any) => {
      if (a.type == type || type == '') {
        return a;
      }
    });
  }
}
