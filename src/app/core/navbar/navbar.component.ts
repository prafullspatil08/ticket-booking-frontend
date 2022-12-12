import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isloggedIn: boolean = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.loggedIn$.subscribe((res) => {
      this.isloggedIn = res;
    });
  }
}
