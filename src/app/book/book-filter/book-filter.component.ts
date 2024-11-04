import {
  Component,
  EventEmitter,
  input,
  Input,
  model,
  output,
  Output,
} from '@angular/core';

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

  foo = input<string>();
  bar = output<string>();

  baz = model<string>();

  setFilter(filter: string) {
    this.filterChange.emit(filter);
  }
}
