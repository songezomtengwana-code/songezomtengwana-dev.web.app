import { Component } from '@angular/core';
import { songezoapi } from 'src/assets/songezo';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  public data = songezoapi;
}
