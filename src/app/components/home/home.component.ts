import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  mensajeError: string;
  error: boolean;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        // console.log(data.albums.items);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        // this.mensajeError = true;
        this.loading = false;
        this.error = true;
        // this.mensajeError = error.error.message;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
}
