import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, SkillCardComponent],
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', level: 'Avanzado' },
    { name: 'CSS', level: 'Avanzado' },
    { name: 'Tailwind', level: 'Intermedio' },
    { name: 'JavaScript', level: 'Avanzado' },
    { name: 'Angular', level: 'Intermedio' },
    { name: 'Next.js', level: 'Intermedio' },
    { name: 'Git', level: 'Intermedio' },
    { name: 'Node.js', level: 'Intermedio' },
  ];
}
