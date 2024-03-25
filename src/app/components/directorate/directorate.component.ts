import { Component, Input } from '@angular/core';
import { Directorate } from '../../models/directorate';
import { ActivatedRoute } from '@angular/router';
import { DirectorateServiceService } from '../../services/directorate-service.service';
import { ServerDetails } from '../../models/server-details';
import { Staff } from '../../models/staff';
import { WebUrlServiceService } from '../../services/web-url-service.service';

@Component({
  selector: 'app-directorate',
  templateUrl: './directorate.component.html',
  styleUrl: './directorate.component.css'
})
export class DirectorateComponent {

  staff!: any[];
	directorate: any = {};
	director:any;
	serverDetails:ServerDetails = new ServerDetails();
  myUrl: any;


	constructor(private route: ActivatedRoute, private directorateService: DirectorateServiceService, public webUrlService:WebUrlServiceService,) {

    this.route.paramMap.subscribe(info => {
      this.myUrl = info.get('id');
      let id = webUrlService.getID(this.myUrl);
  })
		this.route.paramMap.subscribe(rt => {
			const id = rt.get('id');
			this.directorateService.getById(id).subscribe(directorate => {
				this.directorateService.currentDirectorate.next(directorate);
				this.directorate = directorate;
        this.staff = directorate.staff

        this.staff.forEach(staffMember => {
          const details = staffMember.details;
          // Access the properties of the details object
          const initials = details.initials;
          const title = details.title;
        });
			})

		})
    directorateService.currentDirectorate.subscribe(info => {
			this.directorate = info;
			// console.log(info);
			if (info) {
				this.setDirector(info.staff);
			}

		});

	}

  setDirector(staff: any[]){
		try {
			this.director = staff.filter(munhu=>{
				return munhu.details.position.toUpperCase().includes("DIRECTOR");
			})[0].details;
			// console.log(this.director);

		} catch (error) {
			this.director = null;
		}
		// console.log('director');

	}
}
