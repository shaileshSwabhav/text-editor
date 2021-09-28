import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCkeComponent } from './online-cke.component';

describe('OnlineCkeComponent', () => {
  let component: OnlineCkeComponent;
  let fixture: ComponentFixture<OnlineCkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
