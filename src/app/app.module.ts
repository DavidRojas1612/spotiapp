import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//servicicos
import { SpotifyService } from "./services/spotify.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { appRouting } from "./app.routes";
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ArtitsComponent } from './components/artits/artits.component';
import { FotoalbumPipe } from './pipes/fotoalbum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtitsComponent,
    FotoalbumPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
