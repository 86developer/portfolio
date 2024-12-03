import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // Aquí no necesitas la apiUrl, ya que usaremos el API de EmailJS
  sendEmail(data: any) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    // Reemplaza con los valores que obtuviste al configurar tu cuenta en EmailJS
    return emailjs.send(
      'Gmail',
      'template_portfolio',
      templateParams,
      'JVxXIZ7InzbjWpxvA'
    );
  }
}
