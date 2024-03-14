import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { HttpClient } from '@angular/common/http';
import { FaqCategorySolution } from '../models/faq-category-solution';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqsServiceService {

  serverDetail: ServerDetails = new ServerDetails();

	constructor(private http: HttpClient) { }

	public getAllCategorySolutions(id: number): Observable<FaqCategorySolution[]> {
		return this.http.post<FaqCategorySolution[]>(`${this.serverDetail.serverUrlForApi}/faqs/categories-solutions-list`, { "category_id": id });
	}
}
