import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService
      .sendEmail({ name: this.name, email: this.email, message: this.message })
      .then((response) => {
        console.log('Correo enviado con éxito', response);
        alert('Mensaje enviado');
      })
      .catch((error) => {
        console.error('Error al enviar correo', error);
        alert('Error al enviar mensaje');
      });
  }
}
