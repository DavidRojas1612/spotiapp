import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artits',
  templateUrl: './artits.component.html',
  styles: []
})
export class ArtitsComponent implements OnInit {
  artista: any = '';
  pistas: any = '';
  perfil: any ='';

  constructor(private activatedRoute: ActivatedRoute,
              public _sotify: SpotifyService,
              public _router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
    .map( params => params['id'])
    .subscribe(id =>{
      console.log(id);

      this._sotify.getArtista(id).subscribe(artista =>{
       console.log(artista);
       this.artista = artista;
      });
      
      this._sotify.getTop(id).map( (resp: any ) => resp.tracks).subscribe( canciones =>{ 
        console.log(canciones)
        this.pistas = canciones;
      });
        
    });

    
  }

  
}
