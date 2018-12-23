import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudproviderComponent } from './cloudprovider.component';

describe('CloudproviderComponent', () => {
  let component: CloudproviderComponent;
  let fixture: ComponentFixture<CloudproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
