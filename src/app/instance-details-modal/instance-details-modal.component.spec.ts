import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceDetailsModalComponent } from './instance-details-modal.component';

describe('InstanceDetailsModalComponent', () => {
  let component: InstanceDetailsModalComponent;
  let fixture: ComponentFixture<InstanceDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
