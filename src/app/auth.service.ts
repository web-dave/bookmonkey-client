import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string | null = null;
  private loggedIn$$ = new BehaviorSubject(false);
  loggedIn$ = this.loggedIn$$.asObservable();
  constructor(private router: Router) {}
  getAccessToken() {
    return this.accessToken;
  }
  logIn(name: string, password: string) {
    this.loggedIn$$.next(true);
    this.router.navigate(['/books']);
  }
  logOut() {
    this.loggedIn$$.next(false);
    this.router.navigate(['/login']);
  }
}
