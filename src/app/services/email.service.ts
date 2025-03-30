/*https://www.emailjs.com/
 * EmailJS is a service that allows you to send emails using JavaScript
 * without needing a backend server.
 * It uses a third-party email service (like Gmail, Outlook, etc.) to send emails
 * directly from your client-side application.
 * This is useful for sending contact form submissions, notifications, etc.
 *
 * duckdev86@gmail.com
 * password: EmiliaBianca0817
 *
 *
 *
 * Initialize EmailJS with your user ID
 * You can find your user ID in the EmailJS dashboard under "Account Settings"
 */

import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendEmail(data: any) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    return emailjs.send(
      'service_8ldaf5g', //ID of the service you created in EmailJS
      'template_portfolio', //ID of the template you created in EmailJS
      templateParams,
      'JVxXIZ7InzbjWpxvA' //User ID from EmailJS
    );
    //Depuracion de errores
    /*.then((response) => {
        console.log('Correo enviado con éxito', response);
        alert('Mensaje enviado');
      })
      .catch((error) => {
        console.error('Error al enviar correo', error);
        alert('Error al enviar mensaje');
      });*/
  }
}
