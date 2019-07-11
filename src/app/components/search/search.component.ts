import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {


   artistas:any[] = [];
   loading:boolean;
  constructor(private spotifyartista:SpotifyService) {

   }

 buscar(termino:string){

  this.loading = true;
  console.log(termino);

  this.spotifyartista.getArtistas(termino)
    .subscribe((data:any)=>{
      console.log(data);
      this.artistas = data;
      this.loading = false;
 });





 }

}
