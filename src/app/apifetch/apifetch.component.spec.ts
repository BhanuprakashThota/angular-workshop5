import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIFetchComponent } from './apifetch.component';

describe('APIFetchComponent', () => {
  let component: APIFetchComponent;
  let fixture: ComponentFixture<APIFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
