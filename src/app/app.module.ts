import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { ConfigService } from './config.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        AlbumsComponent,
        AlbumDetailComponent,
        PhotosComponent
    ],
    imports: [
        BrowserModule,
        NgxPaginationModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule { }
