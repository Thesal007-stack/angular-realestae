import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery-details',
  standalone: true,
  imports: [GalleryComponent, CommonModule],
  templateUrl: './gallery-details.component.html',
  styleUrl: './gallery-details.component.css',
})
export class GalleryDetailsComponent implements OnInit {
  property: any;
  properties = new GalleryComponent().properties;
  galleryDetail: any = {};
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.property = this.properties.find((p) => p.id === id);
      console.log('Property Found:', this.property);
    }
  }
  goBack(){
    this.router.navigate(['/gallery'])
  }
  gotoContact(){
    this.router.navigate(['/contact']);
  }
}
