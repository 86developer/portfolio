import { Component, inject } from '@angular/core'; // Añadimos inject
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service'; // <--- ASEGÚRATE DE QUE ESTA RUTA SEA CORRECTA

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // Inyectamos el servicio para que el componente pueda usarlo
  private themeService = inject(ThemeService);

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }


}
