import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any = {};

  topTracks: any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe((params) => {
      // console.log(params.id);

      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: any) {
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe((data) => {
      this.loadingArtist = false;
      console.log(data);
      this.artista = data;
    });
  }
  getTopTracks(id: any) {
    this.spotify.getTopTrack(id).subscribe((data: any) => {
      this.topTracks = data.tracks;
      console.log('data llegada', data);
      console.log();
    });
  }

  ngOnInit() {}
}
