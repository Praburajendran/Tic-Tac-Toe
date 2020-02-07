import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { PlayAgainComponent } from './components/play-again/play-again.component';
import { SquareComponent } from './components/square/square.component';

import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent,
    PlayAgainComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UtilityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
