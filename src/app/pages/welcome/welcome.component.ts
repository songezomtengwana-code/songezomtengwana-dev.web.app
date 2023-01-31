import { Component } from '@angular/core';
import { songezoapi } from 'src/assets/songezo';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  public data = songezoapi;
}
