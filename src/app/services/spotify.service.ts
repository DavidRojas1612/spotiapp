import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
 



@Injectable()
export class SpotifyService {




  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQCYNB6PEorgiop5GeHQZSl6RKlW8ZPlQFh9xNc9Qbb7A5qALQdmltoW8MFM5tBM5o8O0_XZ-tyDJJV6n9E'

 
  constructor(public http: HttpClient) {
    console.log('servicio de spotify listo');
    
  
  }

  private getHeaders(): HttpHeaders{
    
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTop(id: string ){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=CO`

    let headers = this.getHeaders();
  

     return this.http.get(url,{ headers })

  }

  getArtista(id: string){
    let url = `${this.urlSpotify}artists/${id}`

    let headers = this.getHeaders();

     return this.http.get(url,{ headers })
               
  }


  getArtistas(termino: string){
     let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    let headers = this.getHeaders();

      return this.http.get(url,{ headers })
                 .map((resp:any)=>{
                    this.artistas = resp.artists.items;
                    return this.artistas;
                 })

   }


}
