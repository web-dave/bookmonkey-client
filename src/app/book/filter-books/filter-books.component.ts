import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-books',
  templateUrl: './filter-books.component.html',
  styleUrls: ['./filter-books.component.scss'],
})
export class FilterBooksComponent {
  @Input() search: string = '';
  @Output() searchChange = new EventEmitter<string>();
  setSearchTerm(e: Event) {
    this.searchChange.emit((e.target as HTMLInputElement).value);
  }
}
