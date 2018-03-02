import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Albums } from '../albums.model';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.sass']
    })
export class AlbumsComponent implements OnInit {
    albums: Albums;
    constructor(private configService: ConfigService) { }

    ngOnInit() {
        this.configService.getData().subscribe((data: Albums) => this.albums = data);
    }

}
