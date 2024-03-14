import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { FaqCategorySolution } from '../../models/faq-category-solution';
import { FaqsServiceService } from '../../services/faqs-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
	selectedCategory!: FaqCategorySolution;

	categSolutions!: FaqCategorySolution[];
	constructor(
		private faqService: FaqsServiceService) {
			this.faqService.getAllCategorySolutions(0).subscribe(data => {this.categSolutions = data});
	}

	ngOnInit(): void {
	}

	getCategory(categ:FaqCategorySolution) {
	this.selectedCategory=categ;
	}
}
