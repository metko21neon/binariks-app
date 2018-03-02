import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { ConfigService } from './config.service';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        AlbumsComponent,
        AlbumDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule { }
