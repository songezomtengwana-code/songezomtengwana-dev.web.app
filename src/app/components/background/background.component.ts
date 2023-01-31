import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
})
export class BackgroundComponent {
  public blipUrl: string = './assets/blip.svg';
}
