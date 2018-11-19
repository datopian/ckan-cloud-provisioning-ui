import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceDetailsFormComponent } from './instance-details-form.component';

describe('InstanceDetailsFormComponent', () => {
  let component: InstanceDetailsFormComponent;
  let fixture: ComponentFixture<InstanceDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
