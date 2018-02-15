import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map' //Para que solo devuelva lo que queremos en el component, resp tiene mucha basura

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  tracks: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQCPDYhLD7ga1gygh8cTsHbHQqnsDq8Mvkj2uKdz9729JDxYdBASV58s5A6XKqzn199QKIXvQZd9CpKYFjA';

  constructor(private _http: HttpClient) {
  	console.log("Servicio Spotify listo!")
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    })

    return headers;
  }

  getArtistas(termino: string){
  	let url= `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;

  	let headers = this.getHeaders();

  	return this._http.get(url, { headers })
                .map( (resp: any) =>{
                  this.artistas = resp.artists.items;
                  return this.artistas;
                });
  }

  getArtista(id: string ){
    let url= `${ this.urlSpotify }artists/${ id }`;

    let headers = this.getHeaders();

    return this._http.get(url, { headers });
  }

  getTop(id: string ){
    let url= `${ this.urlSpotify }artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders();

    return this._http.get(url, { headers })
                .map( (resp: any) =>{
                  this.tracks = resp.tracks;
                  return this.tracks;
                });;
  }


}
