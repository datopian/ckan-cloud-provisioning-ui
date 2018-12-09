import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceConnectionFormComponent } from './instance-connection-form.component';

describe('InstanceConnectionFormComponent', () => {
  let component: InstanceConnectionFormComponent;
  let fixture: ComponentFixture<InstanceConnectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceConnectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
