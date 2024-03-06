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
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { OnlineDirectoryComponent } from './components/online-directory/online-directory.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  {path:'admission',component:AdmissionsComponent},
  {path:'online-directory',component:OnlineDirectoryComponent},
  {path:'school',component:SchoolComponent},
  {path:'directorate',component:DirectorateComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'program',component:ProgramComponent},
  {path:'alumni',component:AlumniComponent},
  {path:'vacancies',component:VacanciesComponent},
  {path:'vacancy-home',component:VacancyHomeComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'job-detail',component:JobDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
