import { Component, OnInit, Sanitizer } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data = 'Hi';
  constructor(private sani: Sanitizer) {}
  foo() {
    console.log('FOOO');
  }
  ngOnInit(): void {}
}
