import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  constructor(private router: Router) {}
  @Input() id!: string;
  @Input() image!: string;
  @Input() price!: string;
  @Input() address!: string;
  @Input() location!: string;
  @Input() beds!: number;
  @Input() baths!: number;
  @Input() area!: number;
  property: any;
  isFavorites: boolean = false;
  toggleFavorites() {
    this.isFavorites = !this.isFavorites;
  }
  getGalleryDetails(){
    this.router.navigate(['/gallery-details', this.id]);
  }

}
