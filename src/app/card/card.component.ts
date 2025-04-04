import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() iconClass: string = 'fas fa-circle';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() bgColor: string = 'bg-gray-500';
}
