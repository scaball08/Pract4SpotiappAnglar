import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotifyservice:SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotifyservice.getNewReleases()
    .subscribe((data:any)=>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
      }, (errorService=>{
        this.loading = false;
        this.error = true;
        this.mensajeError = errorService.error.error.message
          }));

  }



}
