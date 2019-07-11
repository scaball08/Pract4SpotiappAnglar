import { Injectable } from '@angular/core';
// se requiere agregar en los imports del app.module.ts
// la clase HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar el  operador map de los obsevables 'rxjs/operators'
// que se usa para filtrar la data recibida
import { map } from "rxjs/operators";


// inyecta el servicio automaticamente en el app.module.ts
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = "BQCl8JkDwNrvn8kuQwYaPj22scmsPWD-W3-ZlaGVdgIJo6DRueeS9eZH99uLp-_BMCJhPDIcqbbRybDfizs";
  constructor(private http:HttpClient) {
    console.log("Spotify Service Listo")

  }

  getQuery(query:string){
    // se cea una instancia de la clase HttpHeaders
    //para poder enviar el heder de la ptecion con el token
    // se importa la clase HttpHeaders
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({'Authorization':`Bearer ${this.token}`});

// se realiza la peticion get("ruta http", objeto HttpHeaders)
    return this.http.get(url,{headers})

  }

  getNewReleases(){

    // se agrega la funcion pipe por separado ya que en cada caso
    // se filtra de  diferente forma "albums" y "artists"
    return this.getQuery("browse/new-releases?limit=20")
         .pipe(map(data => data['albums'].items));

  }


  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15&offset=1`)
    .pipe(map(data => data['artists'].items ));

  }

  getArtista(id:string){

    // no es necesario filtrar la data con el pipe(map)
    // por que ya esta  viene con la informacion necesaria
    return this.getQuery(`artists/${id}`);
    //.pipe(map(data => data['artists'].items ));

  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks'] ));

  }

}
