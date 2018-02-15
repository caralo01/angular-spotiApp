import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from'@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public artista: any = {};
  public canciones: any[]= [];

  constructor(
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { 

  }

  ngOnInit() {
    this._route.params
      .map( params => params['id'])
      .subscribe( id =>{
        this._spotifyService.getArtista(id)
                    .subscribe(artista => {
                      this.artista = artista;
                    });

        this._spotifyService.getTop(id)
                    .subscribe(canciones => {
                      this.canciones = canciones;
                    });

    })
  }

}
