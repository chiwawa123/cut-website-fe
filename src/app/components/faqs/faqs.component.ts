import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements AfterViewInit {
  @ViewChildren('accordionButton') accordionButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit() {
    this.accordionButtons.forEach(button => {
      button.nativeElement.addEventListener('click', () => this.toggleAccordion(button.nativeElement));
    });
  }

  toggleAccordion(button: HTMLButtonElement) {
    const itemToggle = button.getAttribute('aria-expanded');

    this.accordionButtons.forEach(button => {
      button.nativeElement.setAttribute('aria-expanded', 'false');
    });

    if (itemToggle === 'false') {
      button.setAttribute('aria-expanded', 'true');
    }
  }
}
