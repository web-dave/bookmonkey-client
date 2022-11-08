import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  foo = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur
accusantium, officia quasi repellendus ab dolorum iure accusamus corporis ad
nisi quod, at, aut doloribus eaque sequi reiciendis laborum distinctio?`;

  myStyle = {
    color: 'hotpink',
  };
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.myStyle.color = '#efefef'), 1500);
  }
}
