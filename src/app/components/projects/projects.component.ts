import { Component } from '@angular/core';
import { songezoapi } from 'src/assets/songezo';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  public data: any = songezoapi;
}
