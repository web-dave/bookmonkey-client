import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sa.component.html',
  styleUrls: ['./sa.component.scss']
})
export class SaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
