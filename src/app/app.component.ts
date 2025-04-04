// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, GalleryComponent, ContactComponent],
  template: `
    <div class="flex w-full h-16 bg-black text-white ">
      <nav class="m-5 space-x-10">
        <a routerLink="/home" routerLinkActive="bg-blue-600" [routerLinkActiveOptions]="{ exact: true }" class="px-3 py-2 rounded-md hover:bg-blue-500 transition">
          Home
        </a>
        <a routerLink="/gallery" routerLinkActive="bg-blue-600" class="px-3 py-2 rounded-md hover:bg-blue-500 transition">
          Gallery
        </a>
        <a routerLink="/contact" routerLinkActive="bg-blue-600" class="px-3 py-2 rounded-md hover:bg-blue-500 transition">
          Contact
        </a>
      </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
    }
  `]
})
export class AppComponent {}