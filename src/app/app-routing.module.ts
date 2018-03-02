import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/albums', pathMatch: 'full' },
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:id', component: AlbumDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
