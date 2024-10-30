import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-filter',
  standalone: true,
  imports: [],
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.scss',
})
export class BookFilterComponent {
  @Input() filter = '';
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.filterChange.emit(filter);
  }
}
