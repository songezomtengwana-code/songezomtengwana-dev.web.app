import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LandingComponent } from './components/landing/landing.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonComponent } from './components/button/button.component';
import { BackgroundComponent } from './components/background/background.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { InterceptorService } from './services/intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LandingComponent,
    WelcomeComponent,
    InfoSectionComponent,
    LanguageCardComponent,
    ContentSectionComponent,
    ProjectsComponent,
    ButtonComponent,
    BackgroundComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
