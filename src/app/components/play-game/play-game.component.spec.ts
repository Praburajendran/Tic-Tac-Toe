import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGameComponent } from './play-game.component';
import { SquareComponent } from '../square/square.component';
import { PlayAgainComponent } from '../play-again/play-again.component';


describe('PlayGameComponent', () => {
  let component: PlayGameComponent;
  let fixture: ComponentFixture<PlayGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGameComponent, SquareComponent, PlayAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
