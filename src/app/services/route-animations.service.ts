import { Injectable } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class RouteAnimationsService {
  static slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
      style({
        opacity: 0,
        transform: 'translateY(20px)',
      }),
      animate(
        '300ms ease-out',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
    ]),
  ]);
}
