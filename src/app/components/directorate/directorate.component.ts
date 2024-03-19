import { Component } from '@angular/core';
import { Directorate } from '../../models/directorate';
import { ActivatedRoute } from '@angular/router';
import { DirectorateServiceService } from '../../services/directorate-service.service';
import { ServerDetails } from '../../models/server-details';

@Component({
  selector: 'app-directorate',
  templateUrl: './directorate.component.html',
  styleUrl: './directorate.component.css'
})
export class DirectorateComponent {
	directorate: any = {};
	director:any;
	serverDetails:ServerDetails = new ServerDetails();
	constructor(private route: ActivatedRoute, private directorateService: DirectorateServiceService) {
		this.route.paramMap.subscribe(rt => {
			const id = rt.get('id');
			this.directorateService.getById(id).subscribe(directorate => {
				this.directorateService.currentDirectorate.next(directorate);
				this.directorate = directorate;
			})
		})
    directorateService.currentDirectorate.subscribe(info => {
			this.directorate = info;
			console.log(info);
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
			console.log(this.director);

		} catch (error) {
			this.director = null;
		}
		console.log('director');

	}
}
