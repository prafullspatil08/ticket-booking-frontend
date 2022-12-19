import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoggedIn = false;
  loggedIn$ = new BehaviorSubject(false);
  auth = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  getAllShows() {
    return this.http.get<any>(`${environment.baseUrl}/shows`);
  }

  getShowById(id: any) {
    return this.http.get(`${environment.baseUrl}/shows/${id}`);
  }

  saveSeatDetails(data: any) {
    return this.http.post<any>(`${environment.baseUrl}/bookings`, data);
  }

  getSeatDetails() {
    return this.http.get(`${environment.baseUrl}/bookings`);
  }

  getHistory() {
    return this.http.get(`${environment.baseUrl}/bookings`);
  }

  saveUserData(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data);
  }

  getLoginDetails(email: any, password: any) {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === email && a.password === password;
        });
        if (user) {
          alert('login successfull !!!!!');
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(user));
          this.loggedIn$.next(true);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid credentials !!!');
        }
      },
      (err) => {
        alert('Something went wrong !!!');
      }
    );
  }

  authenticateUser() {
    return this.isLoggedIn;
  }
}
