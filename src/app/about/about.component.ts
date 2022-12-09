import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('check');
    this.data++;
  }
  data = 1;

  ngOnInit(): void {}
}
