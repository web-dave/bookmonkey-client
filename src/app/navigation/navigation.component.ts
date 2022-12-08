import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  private auth = inject(AuthService);
  auth$ = this.auth.loggedin$;
  router = inject(Router);

  logOut() {
    this.auth.logout();
  }
}
