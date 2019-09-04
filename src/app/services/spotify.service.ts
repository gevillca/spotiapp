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
        'Bearer BQDg54GL4Ob8IqgkojgH_CR7yA4Z4k2sUxnHxpVTSHhO4mAg-ENRv_lVbA1LgX4KEyFaXfK_BHMaMJlYSeY'
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }
  getArtista(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=BO&offset=0&limit=15`
    ).pipe(map((data: any) => data.artists.items));
  }
}
