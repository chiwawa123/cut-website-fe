import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { Vacancy } from '../models/vacancy';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {
	serverDetails: ServerDetails = new ServerDetails();
public vacancies: BehaviorSubject<Vacancy[] | null> = new BehaviorSubject<Vacancy[] | null>(null);
public selectedVacancy: BehaviorSubject<Vacancy | null> = new BehaviorSubject<Vacancy | null>(null);
	constructor(
		private _http: HttpClient
	) {

	}

	public getAll(): Observable<Vacancy[]> {
		return this._http.get<Vacancy[]>(`${this.serverDetails.serverUrlForApi}/vacancies`);
	}
	public setVacancies(){
		this.getAll().subscribe(vacancies => this.vacancies.next(vacancies));
	}
}
