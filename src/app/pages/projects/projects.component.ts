import { Component } from '@angular/core';
import { ProyectCardComponent } from '../../components/proyect-card/proyect-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProyectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Luna Mora',
      description:
        'Landing page de una Pyme marplatense desarrollada en el marco de Mar del Plata Programa',
      technologies: 'NextJs, Formik, React, Tailwind',
      link: 'https://proyecto37.ecolan.com/#',
      image: 'lunamora.jpeg',
    },
    {
      title: '6UP Media',
      description:
        'Primer trabajo como desarrollador freelance. Productora de contenidos Audiovisuales, de la ciudad de Mar del Plata. Cuenta con información sobre los servicios que ofrece y además posee una sección de noticias donde se pueden generar comentarios por parte de los visitantes del sitio.',
      technologies: 'Wordpress',
      link: 'https://6upmedia.com/',
      image: '6upmedia2.jpg',
    },
  ];
}
