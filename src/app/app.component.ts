import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { url } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bookmonkey-client';
  constructor(private http: HttpClient) {
    console.log(url);
  }
  ngOnInit(): void {
    this.http.get('/api').subscribe();
  }
}
