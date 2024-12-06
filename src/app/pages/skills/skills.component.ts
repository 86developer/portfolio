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
    { name: '', level: 'Avanzado', icon: 'html-icon.png' },
    { name: '', level: 'Avanzado', icon: 'css-icon.png' },
    {
      name: '',
      level: 'Intermedio',
      icon: 'tailwind-icon.svg',
    },
    {
      name: '',
      level: 'Avanzado',
      icon: 'javascript-icon.png',
    },
    {
      name: '',
      level: 'Intermedio',
      icon: 'angular-icon.png',
    },
    {
      name: '',
      level: 'Intermedio',
      icon: 'nextjs-icon.png',
    },
    { name: '', level: 'Intermedio', icon: 'git-icon.png' },
    {
      name: '',
      level: 'Intermedio',
      icon: 'nodejs-icon.svg',
    },
  ];
}
