import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Albums } from '../albums.model';
import { AlbumId } from '../album-id.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {
    p: number = 1;
    id;
    private sub: any;
    @Input() albums: Albums;
    albumId: AlbumId;
    private albumIdUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getAlbumId();
    }
    getAlbumId(): void {
        this.http.get(this.albumIdUrl + this.id)
            .subscribe((data: AlbumId) => this.albumId = data);
    }
    goBack(): void {
        this.location.back();
    }
}
