import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudHomeComponent } from './cloud-home.component';

describe('CloudHomeComponent', () => {
  let component: CloudHomeComponent;
  let fixture: ComponentFixture<CloudHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
