import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeHomeComponent } from './notice-home.component';

describe('NoticeHomeComponent', () => {
  let component: NoticeHomeComponent;
  let fixture: ComponentFixture<NoticeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
