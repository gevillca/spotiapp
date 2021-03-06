import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('creado servicio');
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer QBlQl2TT6MhJHROh3WYJ2WQ7H1eUzlagwabOAg7Zh9NGW6foBt_UrL6VHFeXWM9EaZgGVpMF0yuJdticYo'
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }
  getArtistas(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=BO&offset=0&limit=15`
    ).pipe(map((data: any) => data.artists.items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(
    //   map((data: any) => {
    //     console.log(data);
    //   })
    // );
  }
  getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`);
    // .pipe(
    //   map((data: any) => {
    //     console.log(data);
    //   })
    // );
    // console.log();
  }
}
