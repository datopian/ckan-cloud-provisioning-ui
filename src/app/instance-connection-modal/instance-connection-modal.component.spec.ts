import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceConnectionModalComponent } from './instance-connection-modal.component';

describe('InstanceConnectionModalComponent', () => {
  let component: InstanceConnectionModalComponent;
  let fixture: ComponentFixture<InstanceConnectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceConnectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceConnectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
