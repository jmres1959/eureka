import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setUser(user) {
    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
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
