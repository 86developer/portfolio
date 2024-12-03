import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyect-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
})
export class ProyectCardComponent {
  @Input() projects: {
    title: string;
    description: string;
    technologies: string;
    link: string;
  }[] = [];
}
