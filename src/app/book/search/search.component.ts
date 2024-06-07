import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: ` <input type="text" (input)="setSearchString($event)" /> `,
})
export class SearchComponent {
  @Input() searchString = '';
  @Output() searchStringChange = new EventEmitter<string>();

  setSearchString(event: Event) {
    this.searchStringChange.emit((event.target as HTMLInputElement).value);
  }
}
