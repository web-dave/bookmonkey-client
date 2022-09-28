import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderBtnDirective } from './order-btn.directive';

@Component({
  template: `<div appOrderBtn orderBtn="Moin!"></div>`,
  selector: 'dummy',
})
export class SandBoxComponent {}
describe('OrderBtnDirective', () => {
  let component: SandBoxComponent;
  let fixture: ComponentFixture<SandBoxComponent>;
  let view: HTMLElement;
  let directive: OrderBtnDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SandBoxComponent, OrderBtnDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(SandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement
      .query(By.directive(OrderBtnDirective))
      .injector.get(OrderBtnDirective);
    view = fixture.nativeElement;
  });

  it('should have Button text `Moin!`', () => {
    expect(directive.btn.innerText).toEqual('Moin!');
  });
  // let foo: HTMLDivElement;
  // foo.dispatchEvent(new Event('mouseenter'))
  it('should listen to mouseenter event', () => {
    const mySpy = spyOn(directive, 'hiho').and.callThrough();
    view.querySelector('div')?.dispatchEvent(new Event('mouseenter'));
    expect(mySpy).toHaveBeenCalled();
    expect(directive.hiho).toHaveBeenCalled();
  });
});
