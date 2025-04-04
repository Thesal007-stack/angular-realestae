import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery-details/:id', component: GalleryDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo:'/home', pathMatch: 'full'},
];
