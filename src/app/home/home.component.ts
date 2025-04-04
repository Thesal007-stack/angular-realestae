import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  getStarted(){
    this.router.navigate(['/gallery'])
  }
  cards = [
    { iconClass: 'fas fa-cube', title: '3D Modeling', description: 'Create detailed 3D models of your house with precision and accuracy.', bgColor: 'bg-red-500' },
    { iconClass: 'fas fa-eye', title: 'Architectural Visualization', description: 'High-quality renderings to showcase your designs for presentations.', bgColor: 'bg-blue-600' },
    { iconClass: 'fas fa-home', title: 'Interior Rendering', description: 'Visualize interior spaces with stunning detail and realism.', bgColor: 'bg-red-500' },
    { iconClass: 'fas fa-building', title: 'Exterior Rendering', description: 'Showcase the exterior design of your house in a photorealistic way.', bgColor: 'bg-red-500' },
    { iconClass: 'fas fa-vr-cardboard', title: 'Virtual Tours', description: 'Offer interactive 3D tours to explore your house designs.', bgColor: 'bg-blue-600' },
    { iconClass: 'fas fa-headset', title: 'Client Support', description: '24/7 support to keep your project on track and answer your questions.', bgColor: 'bg-red-500' },
  ];
}
