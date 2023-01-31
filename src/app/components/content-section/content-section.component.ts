import { Component, Input, OnInit } from '@angular/core';
import { projectsapi } from 'src/assets/projects';
import { songezoapi } from 'src/assets/songezo';

@Component({
  selector: 'content-section',
  templateUrl: './content-section.component.html',
  styleUrls: [
    './content-section.component.css',
    '../info-section/info-section.component.css',
  ],
})
export class ContentSectionComponent implements OnInit {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() watermark: string = '';
  @Input() text: string = '';
  @Input() flow: any;
  @Input() api: any;
  @Input() skills: any;
  @Input() projects: any;
  @Input() scrollPos: string = '';

  ngOnInit() {}

  public data = projectsapi;
  public content: any;
  handleProjectReview(project: any) {
    this.content = project;
  }

  get projectsResponse() {
    return projectsapi;
  }
}
