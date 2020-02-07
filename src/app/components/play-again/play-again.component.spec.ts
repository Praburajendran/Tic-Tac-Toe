import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAgainComponent } from './play-again.component';

describe('PlayAgainComponent', () => {
  let component: PlayAgainComponent;
  let fixture: ComponentFixture<PlayAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit target element when clicking play again element', () => {
    // spy on event emitter
    const component = fixture.componentInstance;
    spyOn(component.playAgainEvent, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const liElem = nativeElement.querySelector('#infobar');
    liElem.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.playAgainEvent.emit).toHaveBeenCalledWith(liElem);
 });

});
