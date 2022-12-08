import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {}

  logIn(name: string, password: string) {
    this.auth.login(name, password).subscribe({
      next: (loggedin) => {
        loggedin
          ? this.router.navigate(['books'])
          : this.router.navigate(['login']);
      },
    });
  }
}
