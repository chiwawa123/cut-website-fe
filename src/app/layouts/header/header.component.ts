import { Component } from '@angular/core';
import { Directorate } from '../../models/directorate';
import { SchoolServiceService } from '../../services/school-service.service';
import { DirectorateServiceService } from '../../services/directorate-service.service';
import { WebUrlServiceService } from '../../services/web-url-service.service';
import { Router } from '@angular/router';
import { ConfigIpToUseServiceService } from '../../services/config-ip-to-use-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  schools: Array<any> = [];
  directorates!: Directorate[];
  is_internal:Boolean = false ;

  tag:string ="technology   innovation    wealth"
  constructor(
    private schoolService: SchoolServiceService,
    private directorateService: DirectorateServiceService,
    public webUrlService:WebUrlServiceService,
	private router: Router,
	public web_ip:ConfigIpToUseServiceService
  ) {
	web_ip.is_internal.subscribe(data=>{
		this.is_internal = data
	});
    directorateService.getAll().subscribe(data=>{
      this.directorates = data;
    })
	// let Tau =
	schoolService.getAllSchools().subscribe((data:Array<any>)=>{
	  this.schools = data.map(info=>{info.url=this.getUrl(info.id); return info;});
	//   Tau.unsubscribe();
	});
  }


  gotoSchool(id: string) {
    this.router.navigateByUrl('school/' + id);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  getUrl(id: number){
	  return this.webUrlService.getUrl(id);
  }

  directoryUrl(directorate:any){
	  if(directorate.url){
		  return directorate.url;
	  }
	  return 'directorate/'+directorate.id;
  }

	navigate(url: string){
		window.location.href = url
	}

}
