import { Component } from '@angular/core';
import { EventsServiceService } from '../../services/events-service.service';
import { Program } from '../../models/program';
import { SchoolServiceService } from '../../services/school-service.service';
import { WebUrlServiceService } from '../../services/web-url-service.service';
import { Events } from '../../models/events';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {
  indexSelected: number = 0;
  schools!: Array<any>;
  selectedPrograms!: Array<Program>;
  selectedSchool:any;
  constructor(
    private schoolService:SchoolServiceService,
    private eventServices:EventsServiceService,
    public webUrlService:WebUrlServiceService,
  ) {
     this.schoolService.getAllSchoolsWithDepartmentsAndProgram().subscribe((data:Array<any>)=>{
	//   this.schools = data;
	  this.schools = data.map(info=>{info.url=this.getUrl(info.id); return info;});
      this.selected(Math.floor((Math.random() * data.length)));
      const changePro = ()=> this.selected(this.indexSelected == data.length-1?0:++this.indexSelected)
      setInterval(changePro

      ,15000);
    })
  }

  ngOnInit(): void {

  }

  selected(index: number): void{
    this.indexSelected = index;
    this.setSixPrograms();
    this.eventServices.getSchoolEventsForFrontPage(this.selectedSchool.id).subscribe((data:Array<Events>)=>{
      this.selectedSchool.events = data;
    });
    //console.log(this.selectedSchool);
  }

  setSixPrograms(){
    this.selectedSchool = this.schools[this.indexSelected];
    this.selectedPrograms = [];
    for (let j = 0; j < this.schools[this.indexSelected].departments.length && this.selectedPrograms.length<6; j++) {
      const element = this.schools[this.indexSelected].departments[j];
      for (let i = 0; i < element.programs.length && this.selectedPrograms.length<6; i++) {
          this.selectedPrograms.push(element.programs[i]);
      }
    }

  }

  getAbout(){
    if(!this.selectedSchool){
      return "...loading";
    }
    if(this.selectedSchool.description){
      let p1:string = this.selectedSchool.description.about.split("</p>")[0];
      p1 = p1.replace("<p>","").substr(0,200);
      return p1;
    }
    return "..."

  }

  getUrl(id: any){
	return this.webUrlService.getUrl(id);
  }

}
