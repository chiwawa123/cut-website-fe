import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmissionsComponent } from './components/admissions/admissions.component'
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { SchoolComponent } from './components/school/school.component';
import { DirectorateComponent } from './components/directorate/directorate.component';
import { AboutComponent } from './components/about/about.component';
import { ProgramComponent } from './components/program/program.component';
import { ContactComponent } from './components/contact/contact.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { FaqsComponent } from './components/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdmissionsComponent,
    SchoolComponent,
    DirectorateComponent,
    AboutComponent,
    ProgramComponent,
    ContactComponent,
    VacanciesComponent,
    AlumniComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
