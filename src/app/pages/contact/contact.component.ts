import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    // Validar que todos los campos estén llenos
    if (!this.name || !this.email || !this.message) {
      // alert('Por favor, completa todos los campos');
      return;
    }
    //Validar el formato del correo electrónico
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(this.email)) {
    //   alert('Por favor, ingresa un correo electrónico válido');
    //   return;
    // }
    //Validar el tamaño del mensaje
    if (this.message.length < 50) {
      alert('El mensaje debe tener al menos 50 caracteres');
      return;
    }
    //Llamar al servicio de envío de correo
    this.emailService
      .sendEmail({ name: this.name, email: this.email, message: this.message })
      .then((response) => {
        console.log('Correo enviado con éxito', response);
        alert('Mensaje enviado!');
      })
      .catch((error) => {
        console.error('Error al enviar correo', error);
        alert(
          'Error al enviar mensaje. Por favor, inténtalo de nuevo más tarde.'
        );
      });
  }
}
