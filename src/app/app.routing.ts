import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guards

//import Components
import { HomeComponent } from './components/home/home.component';;
import { SearchComponent } from './components/search/search.component';
import {ArtistComponent } from './components/artist/artist.component';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'artist/:id', component: ArtistComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:true});