import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit target element when clicking li element', () => {
    // spy on event emitter
    const component = fixture.componentInstance;
    spyOn(component.clickEvent, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const liElem = nativeElement.querySelector('li');
    liElem.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.clickEvent.emit).toHaveBeenCalledWith(liElem);
 });

});
