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
      'Gmail',
      'template_portfolio',
      templateParams,
      'JVxXIZ7InzbjWpxvA'
    );
  }
}
