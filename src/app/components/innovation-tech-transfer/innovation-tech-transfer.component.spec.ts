import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationTechTransferComponent } from './innovation-tech-transfer.component';

describe('InnovationTechTransferComponent', () => {
  let component: InnovationTechTransferComponent;
  let fixture: ComponentFixture<InnovationTechTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnovationTechTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnovationTechTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
