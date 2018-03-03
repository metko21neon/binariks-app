import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Photos } from '../photos.model';
import { AlbumId } from '../album-id.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
    id;
    private sub: any;
    @Input() albumId: AlbumId;
    photos: Photos;
    photosUrl = 'https://jsonplaceholder.typicode.com/photos/';
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getPhotos();
    }
    getPhotos(): void {
        this.http.get(this.photosUrl + this.id)
            .subscribe((data: Photos) => this.photos = data);
    }
    goBack(): void {
        this.location.back();
    }
}
