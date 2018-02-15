import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

import { HttpClientModule } from "@angular/common/http"

import { FormsModule } from "@angular/forms" //ngModel

//Services
import { SpotifyService } from './services/spotify.service';

//Componets
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';

//Pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,   
    ArtistComponent,
    SinfotoPipe,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
