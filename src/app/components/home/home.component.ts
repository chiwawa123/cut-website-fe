import { Component } from '@angular/core';
import { News } from '../../models/news';
import { ServerDetails } from '../../models/server-details';
import { NewsServiceService } from '../../services/news-service.service';
import { DataMonitorServiceService } from '../../services/data-monitor-service.service';
import { NoticeServiceService } from '../../services/notice-service.service';
import { EventsServiceService } from '../../services/events-service.service';
import { Events } from '../../models/events';
import { Notice } from '../../models/notice';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

	newsData!: Array<any>;
	eventsData: Array<Events> | undefined;
	serverDetails = new ServerDetails();
	notices!: Notice[];

storageUrl =  this.serverDetails.serverUrlForStrorage;;
  sliderNews: Array<any> = [];
  currentSlideIndex: number = 0;
  mainNews: News | undefined;
  currentNewsItem!:News

  constructor(
    private noticeService: NoticeServiceService,
		private eventsService: EventsServiceService,
    private newsService: NewsServiceService,
    private dataMonitor: DataMonitorServiceService
  ) {
    this.newsService.getNewsForSlider().subscribe((data: Array<News>) => {
      console.log('Slider News:', data); // Debugging statement
      this.sliderNews = data;
      this.dataMonitor.changeStatus();
    });

    this.newsService.getMainNews().subscribe(data => {
      console.log('Main News:', data); // Debugging statement
      this.mainNews = data;
    });

    this.newsService.getAllNews().subscribe((data: Array<any>) => {
			this.newsData = data;
			this.dataMonitor.changeStatus();
		});
    this.eventsService.getFrontPageEvents().subscribe((data: Array<Events>) => {
			this.eventsData = data;
			this.dataMonitor.changeStatus();
		});

		this.noticeService.getAll().subscribe(notices => {
			this.notices = notices;
			const len = notices.length > 8 ? 0 : (7 - notices.length);
			this.newsData = this.newsData.slice(0, len);
		});
  }

  ngOnInit(): void {}

  getBackgroundImage(news: News) {
    const backgroundImageUrl = this.serverDetails.serverUrlForStrorage + '/' + news.picUrl;
    console.log('Background image URL:', backgroundImageUrl); // Debugging statement
    return "url(" + backgroundImageUrl + ")";
  }

  getUrl(news: { id: any; linkUrl: string }) {
    let url = `/news/${news.id}`;
    if (news.linkUrl) {
      url = news.linkUrl.includes('http')
        ? news.linkUrl
        : this.serverDetails.serverUrlForStrorage + '/' + news.linkUrl;
    }
    var win = window.open(url, '_blank');
  }
  slideEvent(event: NgbSlideEvent) {
    console.log(event);
    const currentIndex =Number(event.current.split("-")[2])
    console.log(currentIndex);
    this.currentNewsItem = this.sliderNews[currentIndex]
  }

}
