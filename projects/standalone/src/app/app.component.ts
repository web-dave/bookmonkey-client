import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'standalone';
  foo = inject(Title).getTitle();
  // constructor( foo: Title){
  // this.foo = title.getTitle()
  // }
}
