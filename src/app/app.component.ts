import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client-14';
  constructor() {}
  // #w = 7;
  // foo() {
  //   this.#w;
  // }
}

// let status: 'done' | 'todo' = 'todo';

// let a: 42 | 24 | 4711 = 42;
// a = 24;

// type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
//   ? Acc[number]
//   : Enumerate<N, [...Acc, Acc['length']]>

// type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

// type T = IntRange<20, 300>

// var foo = 'bar';

// if(true){
//   var foo = 'baz'
// }
