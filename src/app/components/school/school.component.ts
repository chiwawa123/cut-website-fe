import { Component } from '@angular/core';
import { ServerDetails } from '../../models/server-details';
import { SchoolServiceService } from '../../services/school-service.service';
import { ActivatedRoute } from '@angular/router';
import { WebUrlServiceService } from '../../services/web-url-service.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {
  selectedStaff: any;


  title:string =""
  school: any;
  dean:any;
  serverDetails = new ServerDetails();
  storageUrl =  this.serverDetails.serverUrlForStrorage;
  myUrl: any;

  constructor(

    private schoolService:SchoolServiceService,
    private route:ActivatedRoute,
    public webUrlService:WebUrlServiceService,
    private viewportScroller: ViewportScroller
  ) {
      this.route.paramMap.subscribe(info => {
        this.myUrl = info.get('id');
        let id = webUrlService.getID(this.myUrl);
        this.schoolService.getSchoolById(id).subscribe((data:any)=>{

          this.school = data;
		console.log(data);

          this.title = this.school.name
          this.getDean(data);
          window.scroll(0,0);
        })
      });
      this.serverDetails;
    }


  getDean(data:any){
    var dean = null;
    try {
      this.dean = data.my_staff.filter((staff: { staff_details: { position: { toString: () => string; }; }; }) => {
        return staff.staff_details.position && (staff.staff_details.position.toString().trim().toUpperCase().includes('DEAN') || staff.staff_details.position.toString().trim().toUpperCase().includes('DIRECTOR'));
      })[0];

    } catch (error) {
      console.log(error);
    }

  }

  getBackgroundImage(url:string){

    return `url(${this.serverDetails.serverUrlForStrorage}/${url}) no-repeat center center/cover`;// "url("+this.serverDetails.serverUrlForStrorage+'/'+news.picUrl+") no-repeat  center center/cover";
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(staff: any) {
    this.selectedStaff = staff;
  }
}
