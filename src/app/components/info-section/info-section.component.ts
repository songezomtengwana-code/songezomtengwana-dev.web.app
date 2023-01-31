import { Component } from '@angular/core';
import { songezoapi } from 'src/assets/songezo';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
})
export class InfoSectionComponent {
  public data: any = songezoapi;
}
