import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Albums } from './albums.model';
import { AlbumId } from './album-id.model';

@Injectable()
export class ConfigService {
    private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
    constructor(private http: HttpClient) { }

    getAlbums(): Observable<Albums> {
        return this.http.get<Albums>(this.albumsUrl);
    }
}
