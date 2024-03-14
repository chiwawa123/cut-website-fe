import { Component } from '@angular/core';
import { ServerDetails } from '../../models/server-details';
import { News } from '../../models/news';
import { ActivatedRoute } from '@angular/router';
import { NewsServiceService } from '../../services/news-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  title: string = '';
	article: any;
	news!: News[];
	mainNews: News | undefined;
	serverDetails: ServerDetails = new ServerDetails();
  storageUrl =  this.serverDetails.serverUrlForStrorage;
	constructor(
		private route: ActivatedRoute,
		private newsService: NewsServiceService
	) {

		this.route.paramMap.subscribe(info => {
			const id = <number><unknown>info.get('id');
			// console.log('id',id);

			if (id) {
				this.newsService.getNewsById(id).subscribe(article => {
					// console.log('articale',article);
					this.article = article;
					this.title = "News: " + article.title;
					window.scroll(0, 0);
				});
			}
			this.newsService.getAllNews().subscribe(nhau => this.news = nhau);
			this.newsService.getMainNews().subscribe(nhau => this.mainNews = nhau);
			// this.shuffle(this.news);
		})
		// const id = <number><unknown>this.route.snapshot.paramMap.get('id');
	}
	readMore(id: any){
		alert(id)
	}

	shuffle(array: any[]) {
		array.sort(() => Math.random() - 0.5);
	}


}
