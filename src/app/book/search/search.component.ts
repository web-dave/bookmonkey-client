import { Component, model } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  // searchTerm = input.required<string>();
  // searchTerm2 = output<string>();
  searchTerm = model<string>();

  setSearchTerm(search: string) {
    this.searchTerm.set(search);
  }
}
