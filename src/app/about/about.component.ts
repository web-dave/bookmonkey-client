import { Component, OnInit, Sanitizer } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data = 'Hi';

  ngOnInit(): void {}
}
