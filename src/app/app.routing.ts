import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PokerCategoryComponent } from './poker-category/poker-category.component';
import { GamesCategoryComponent } from './games-category/games-category.component';

const appRoutes: Routes = [
    { path: '',component: HomeComponent },
    { path: 'poker', component: PokerCategoryComponent },
    { path: 'games', component: GamesCategoryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);