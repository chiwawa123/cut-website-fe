import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { SchoolComponent } from './components/school/school.component';

const routes: Routes = [

  { path:'',component:HomeComponent },
  {path:'admission',component:AdmissionsComponent},
  {path:'school',component:SchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
