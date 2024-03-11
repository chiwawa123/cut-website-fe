import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { Observable, map, publishReplay, refCount } from 'rxjs';
import { News } from '../models/news';
import { HttpClient } from '@angular/common/http';
import { Notice } from '../models/notice';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  serverDetails = new ServerDetails();
	allNews: Observable<Array<News>> | undefined;
	frontPageNews: Observable<News[]> | undefined;
	sliderNews: Observable<News[]> | undefined;
	mainNews: Observable<News[]> | undefined;
	notice: Observable<News> | undefined;
	constructor(private http: HttpClient) { }

	public getAllNews(): Observable<Array<News>> {

		return this.http.get<Array<News>>(this.serverDetails.serverUrlForApi + '/news');
		// return this.allNews;
	}

	public getNewsById(id: number): Observable<News> {


		return this.http.get<News>(`${this.serverDetails.serverUrlForApi}/news/${id}`);

	}

	public getNoticeById(id: any):Observable<Notice>{
		return this.http.get<Notice>(`${this.serverDetails.serverUrlForApi}/notice/get/${id}`);
	}

	public getFrontPageNews(): Observable<Array<News>> {

		if (!this.frontPageNews) {
			console.log('from server');

			this.frontPageNews = this.http.get<Array<News>>(this.serverDetails.serverUrlForApi + '/news/frontPage').pipe(
				map((data: any) => data),
				publishReplay(1),
				refCount()
			);

		}
		return this.frontPageNews;
	}

	public getNewsForSlider(): Observable<Array<News>> {

		if (!this.sliderNews) {
			this.sliderNews = this.http.get<Array<News>>(this.serverDetails.serverUrlForApi + '/news/frontPage').pipe(
				map(data => data),
				publishReplay(1),
				refCount()
			);
		}

		return this.sliderNews;
	}

	public getMainNews(): Observable<any> {

		if (!this.mainNews) {
			this.mainNews = this.http.get<Array<News>>(this.serverDetails.serverUrlForApi + '/news/getMainNews').pipe(
				map(data => data),
				publishReplay(1),
				refCount()
			);

		}
		return this.mainNews;
	}

	public getNotice(): Observable<any> {

		if (!this.notice) {
			this.notice = this.http.get<News>(this.serverDetails.serverUrlForApi + '/news/getNotice').pipe(
				map(data => data),
				publishReplay(1),
				refCount()
			);

		}
		return this.notice;
	}
}
