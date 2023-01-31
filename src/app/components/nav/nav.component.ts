import { Component } from '@angular/core';
import { songezoapi } from 'src/assets/songezo';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public data = songezoapi;

  handleNavLinks() {
    const navlink = document.querySelector('.nav-links') as HTMLElement;

    if (navlink.classList.contains('nav-links-active')) {
      navlink.classList.remove('nav-links-active');
    } else {
      navlink.classList.add('nav-links-active');
    }
  }
}
