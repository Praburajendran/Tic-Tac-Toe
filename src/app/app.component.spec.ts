import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { SquareComponent } from './components/square/square.component';
import { PlayAgainComponent } from './components/play-again/play-again.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayGameComponent,
        SquareComponent,
        PlayAgainComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tic-tac-toe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tic-Tac-Toe');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tic-Tac-Toe');
  });
});
