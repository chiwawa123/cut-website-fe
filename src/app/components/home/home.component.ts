import { Component } from '@angular/core';
import { News } from '../../models/news';
import { ServerDetails } from '../../models/server-details';
import { NewsServiceService } from '../../services/news-service.service';
import { DataMonitorServiceService } from '../../services/data-monitor-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sliderNews: Array<any> = [];
  currentSlideIndex: number = 0;
  mainNews: News | undefined;
  serverDetails = new ServerDetails();
parseInt: any;
carousel: any;

  constructor(
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
}
