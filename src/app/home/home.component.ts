import { Component } from '@angular/core';
import { fadeInOut } from '../shared/animations/fadeInOut';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInOut]
})
export class HomeComponent {

}
