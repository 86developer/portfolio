import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
  standalone: true,
})
export class SkillCardComponent {
  @Input() skill!: { name: string; level: string; icon: string };
}
