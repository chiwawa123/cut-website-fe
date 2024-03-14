import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { VacancyServiceService } from '../../services/vacancy-service.service';

@Component({
  selector: 'app-vacancy-home',
  templateUrl: './vacancy-home.component.html',
  styleUrl: './vacancy-home.component.css'
})
export class VacancyHomeComponent {
	vacancies!: Vacancy[];
	mySearch:boolean=false;
	filteredVacancies!: Vacancy[];
	constructor(private vacancyService: VacancyServiceService) {
		this.vacancyService.vacancies.subscribe(
			vac => {
        this.filteredVacancies = this.vacancies ?? [];
				this.filteredVacancies = this.vacancies;
			});
	}

	ngOnInit(): void {
	}
	changeEntry(item: Vacancy | null) {
		this.vacancyService.selectedVacancy.next(item);
		localStorage.setItem('vacancy', JSON.stringify(item));
	}

	search(query: string) {
		query = query.toUpperCase();
		if(query.length<3){
			this.filteredVacancies = this.vacancies;
			this.mySearch =false;
			return;
		}
		this.mySearch =true;
		this.filteredVacancies = this.vacancies.filter(vac => {

			return vac.title.toUpperCase().includes(query)
				|| vac.duties.toUpperCase().includes(query)
				|| vac.specification.toUpperCase().includes(query);
		});
	}
}
