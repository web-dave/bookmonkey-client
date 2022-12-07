import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  auth$ = this.auth.loggedIn$;
  constructor(private auth: AuthService) {}

  logOut() {
    this.auth.logOut();
  }
}
