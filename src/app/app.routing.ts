import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PokerCategoryComponent } from './poker-category/poker-category.component';
import { GamesCategoryComponent } from './games-category/games-category.component';
import { MusicCategoryComponent } from './music-category/music-category.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
    { path: '',component: HomeComponent },
    { path: 'poker', component: PokerCategoryComponent },
    { path: 'poker/:id', component: PostDetailComponent },
    { path: 'games', component: GamesCategoryComponent },
    { path: 'games/:id', component: PostDetailComponent },
    { path: 'music', component: MusicCategoryComponent },
    { path: 'music/:id', component: PostDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);