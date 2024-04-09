import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;

  constructor() {
    setTimeout(() => {
      console.log('login');

      this.isLoggedIn = true;
    }, 3000);
  }
}
