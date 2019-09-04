import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('creado servicio');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAu13w1l9JCQL8jvKnt7AJ2M1zdKqLGvBXaPxbxNZxSC-juCEfoQmqyDWPKRHIph7HkI2JP70NpAkJ8vGQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
    });
  }
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAu13w1l9JCQL8jvKnt7AJ2M1zdKqLGvBXaPxbxNZxSC-juCEfoQmqyDWPKRHIph7HkI2JP70NpAkJ8vGQ'
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=BO&offset=0&limit=15`,
      {
        headers
      }
    );
  }
}
