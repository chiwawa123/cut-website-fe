import { Component } from '@angular/core';
import { ServerDetails } from '../../models/server-details';
import { Directory } from '../../models/directory';
import { DirectorateServiceService } from '../../services/directorate-service.service';
import { DirectoryServiceService } from '../../services/directory-service.service';

@Component({
  selector: 'app-online-directory',
  templateUrl: './online-directory.component.html',
  styleUrl: './online-directory.component.css'
})
export class OnlineDirectoryComponent {
  serverDetails: ServerDetails = new ServerDetails;
	searchResults!: Directory[];
	directory!: Directory[];
	loading:boolean = false;
	constructor(
		private _directoryService: DirectoryServiceService
	) {
		_directoryService.getAll().subscribe(data=>{
			this.directory = data;
			console.log(data);

		});

	}


	ngOnInit(): void {
	}

	search(query: string){
		// if(query.length<3){
		// 	this.searchResults = []
		// 	return
		// }
		query = query.toUpperCase();
		this.searchResults = this.directory.filter(info =>{
			let searched:boolean = false;
			try {
				searched = info.name.toLocaleUpperCase().includes(query)||(info.department? info.department.department_name?info.department.department_name.toUpperCase().includes(query):false:false)||info.direct_line.toLocaleUpperCase().includes(query)||info.extention.toUpperCase().includes(query)||info.occupation.toUpperCase().includes(query);
				// searched?info.department.department_name.toUppercase().includes(query)?true:false:false;
			} catch (error) {
				console.log(error);

			}
			return searched
		})
	}

}
