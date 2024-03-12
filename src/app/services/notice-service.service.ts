import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { HttpClient } from '@angular/common/http';
import { Notice } from '../models/notice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeServiceService {
	serverDetail:ServerDetails = new ServerDetails();
	constructor(
		private _http:HttpClient
	) {
	}

	public getAll():Observable<Notice[]>{
		return this._http.get<Notice[]>(`${this.serverDetail.serverUrlForApi}/notice/web`);
	}

	public getNoticeById(id: any):Observable<Notice>{
		return this._http.get<Notice>(`${this.serverDetail.serverUrlForApi}/notice/get/${id}`);
	}

}
