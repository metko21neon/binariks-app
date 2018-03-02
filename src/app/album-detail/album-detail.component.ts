import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Albums } from '../albums.model';
import { AlbumId } from '../album-id.model';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {
    @Input() albums: Albums;
    albumId: AlbumId;
    constructor(
        private configService: ConfigService,
        private location: Location) {
    }

    ngOnInit() {
        this.getAlbumId();
    }

    getAlbumId(): void {
        this.configService.getAlbumId()
            .subscribe((data: AlbumId) => this.albumId = data);
    }

    goBack(): void {
        this.location.back();
    }
}
