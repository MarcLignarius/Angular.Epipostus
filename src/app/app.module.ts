import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MusicCategoryComponent } from './music-category/music-category.component';
import { GamesCategoryComponent } from './games-category/games-category.component';
import { PokerCategoryComponent } from './poker-category/poker-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicCategoryComponent,
    GamesCategoryComponent,
    PokerCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
