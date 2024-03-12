import { Component, Input } from '@angular/core';
import { Notice } from '../../models/notice';
import { ServerDetails } from '../../models/server-details';
import { ActivatedRoute } from '@angular/router';
import { NewsServiceService } from '../../services/news-service.service';
import { Parent } from '../../models/parent';

@Component({
  selector: 'app-notice-home',
  templateUrl: './notice-home.component.html',
  styleUrl: './notice-home.component.css'
})
export class NoticeHomeComponent {

  @Input('title') title:string | undefined;
  @Input('parent')
  parent!: Parent;
  @Input('picUrl')
  picUrl!: string;


	article!: Notice;
	news!: Notice[];
	// mainNews: News;

	serverDetails: ServerDetails = new ServerDetails();
	constructor(
		private route: ActivatedRoute,
		private newsService: NewsServiceService
	) {

		this.route.paramMap.subscribe(info => {
			const id = <number><unknown>info.get('id');
			// console.log('id',id);

			if (id) {
				this.newsService.getNoticeById(id).subscribe(article => {
					// console.log('articale',article);
					this.article = article;
					this.title = "News: " + article.title;
					console.log(this.article)
					window.scroll(0, 0);
				});
			}
			this.newsService.getNotice().subscribe(nhau => this.news = nhau);
			// this.newsService.getMainNews().subscribe(nhau => this.mainNews = nhau);
			// this.shuffle(this.news);
		})
		// const id = <number><unknown>this.route.snapshot.paramMap.get('id');
	}
	readMore(id: any){
		alert(id)
	}

	ngOnInit(): void {

	}


	 bytesToSize(bytes: number) {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		if (bytes == 0) return '0 Byte';
		var i = parseInt((Math.floor(Math.log(bytes) / Math.log(1024)).toString()));
		return Math.round((bytes / Math.pow(1024, i))) + ' ' + sizes[i];
	 }

   getImage(){
    return this.picUrl? `url('${this.serverDetails.serverUrlForStrorage}/${this.picUrl}')` :'url(assets/img/about.jpg)'
  }

}


