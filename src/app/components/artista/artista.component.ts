import { Component, OnInit } from '@angular/core';

// ActivatedRoute clase para recibir los parametros que vienen en la ruta
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista:any= {};
  topTracks:any[]=[];
  loading:boolean;

  constructor(private router:ActivatedRoute, private spotiServ:SpotifyService) {
   this.router.params.subscribe(params=> {
     this.getArtista(params['id']);
     this.getTopTracks(params['id']);

   });
  }


  getArtista(id:string){
    this.loading = true;
    this.spotiServ.getArtista(id)
        .subscribe(artista=>{
          console.log(artista);
          this.artista=artista;
          this.loading = false;
        });
  }

  getTopTracks(id:string){

    this.spotiServ.getTopTracks(id)
        .subscribe(topTracks=>{
          console.log(topTracks);
          this.topTracks = topTracks;
        });

  }



}
