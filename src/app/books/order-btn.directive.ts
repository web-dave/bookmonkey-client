import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appOrderBtn]',
})
export class OrderBtnDirective implements OnChanges {
  @Input() orderBtn: string = '';
  btn: HTMLButtonElement = document.createElement('button');

  constructor(private elem: ElementRef) {
    elem.nativeElement.appendChild(this.btn);
  }
  @HostListener('mouseenter', ['$event'])
  hiho(e: Event) {
    console.log(e);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.btn.innerText = this.orderBtn;
  }
}
