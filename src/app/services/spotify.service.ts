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
        'Bearer BQDqKlIlFptnWykcklqNBrOQ7ySjsH36iFGV1a_othmomK_27JGctlefq2edxQiwSzpmu_nz5tzXaJV6CUk'
    });

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
