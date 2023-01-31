import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css'],
})
export class LanguageCardComponent {
  @Input() data: any;
  public description: string = '';
  public language: string = '';

  async handleDescription(skill: any) {
    this.description = skill.description;
    this.language = skill.language;
    console.log(this.description);
  }
}
