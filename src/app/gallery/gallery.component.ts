import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PropertyCardComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  properties = [
    {
      id: '1',
      image: '/assets/house1.jpg',
      price: '$15,000',
      address: '685, Broom ST',
      location: 'Williamsbridge, USA',
      beds: 3,
      baths: 2,
      area: 1200,
    },
    {
      id: '2',
      image: '/assets/house2.jpg',
      price: '$20,500',
      address: '900, Elm ST',
      location: 'Brooklyn, USA',
      beds: 4,
      baths: 3,
      area: 1500,
    },
    {
      id: '3',
      image: '/assets/house3.png',
      price: '$18,000',
      address: '450, Oak AVE',
      location: 'Queens, USA',
      beds: 3,
      baths: 2,
      area: 1300,
    },
    {
      id: '4',
      image: '/assets/house4.png',
      price: '$22,000',
      address: '120, Maple Lane',
      location: 'San Francisco, USA',
      beds: 2,
      baths: 1,
      area: 2000,
    },
    {
      id: '5',
      image: '/assets/house5.jpg',
      price: '$25,500',
      address: '980, Pine ST',
      location: 'Los Angeles, USA',
      beds: 4,
      baths: 3,
      area: 1800,
    },
    {
      id: '6',
      image: '/assets/house6.jpg',
      price: '$30,000',
      address: '755, Cedar Avenue',
      location: 'Miami, USA',
      beds: 6,
      baths: 5,
      area: 2500,
    },
  ];
}
