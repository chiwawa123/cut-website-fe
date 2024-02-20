import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { SchoolComponent } from './components/school/school.component';
import { AboutComponent } from './components/about/about.component';
import { ProgramComponent } from './components/program/program.component';
import { DirectorateComponent } from './components/directorate/directorate.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyHomeComponent } from './components/vacancy-home/vacancy-home.component';
import { FaqsComponent } from './components/faqs/faqs.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  {path:'admission',component:AdmissionsComponent},
  {path:'school',component:SchoolComponent},
  {path:'directorate',component:DirectorateComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'program',component:ProgramComponent},
  {path:'alumni',component:AlumniComponent},
  {path:'vacancies',component:VacanciesComponent},
  {path:'vacancy-home',component:VacancyHomeComponent},
  {path:'faqs',component:FaqsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
