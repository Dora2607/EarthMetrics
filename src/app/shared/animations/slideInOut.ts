import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
    ])
  ])