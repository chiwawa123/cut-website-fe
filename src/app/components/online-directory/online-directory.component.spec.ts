import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDirectoryComponent } from './online-directory.component';

describe('OnlineDirectoryComponent', () => {
  let component: OnlineDirectoryComponent;
  let fixture: ComponentFixture<OnlineDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
