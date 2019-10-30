import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setUser(user: string) {
    // const user_string = JSON.stringify(user);
    // localStorage.setItem('currentUser', user_string);
    localStorage.setItem('currentUser', user);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    console.log('isLoggedIn', localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
}
