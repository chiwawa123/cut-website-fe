import { Component } from '@angular/core';
import { News } from '../../models/news';
import { Events } from '../../models/events';
import { ServerDetails } from '../../models/server-details';
import { Notice } from '../../models/notice';
import { NewsServiceService } from '../../services/news-service.service';
import { EventsServiceService } from '../../services/events-service.service';
import { NoticeServiceService } from '../../services/notice-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  title: string = 'News'
	news!: News[];
	news_main!: News;
	events!: Events[];
	page = 1;
	pageSize = 8;
	serverDetails = new ServerDetails();
	notices!: Notice[];

	constructor(

		private newsService: NewsServiceService,
		private eventsService: EventsServiceService,
		private noticeService: NoticeServiceService
	) {
		this.newsService.getAllNews().subscribe(news => {
			this.news = news;
		});
		this.noticeService.getAll().subscribe(notices => {
			this.notices = notices
			console.log(notices);

		})
		this.newsService.getMainNews().subscribe(main => this.news_main = main);
		this.eventsService.getAllEvents().subscribe(ev => this.events = ev);
	}


	picUrl(url: any) {

		return `${this.serverDetails.serverUrlForStrorage}/${url}`;
	}

	shuffle(array: any[]) {
		array.sort(() => Math.random() - 0.5);
	}

}
