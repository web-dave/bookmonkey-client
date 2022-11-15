import { Component, Directive, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { SaComponent } from '../sa/sa.component';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-so',
  standalone: true,
  imports: [CommonModule, SaComponent, TopNavComponent],
  templateUrl: './so.component.html',
})
export class SoComponent implements OnInit {
  names = ['Hallo1', 'Hallo2', 'Hallo3', 'Hallo4', 'Hallo5', 'Hallo6'];
  constructor() {}

  ngOnInit(): void {}
}
