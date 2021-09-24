import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeComponent } from './cke.component';

describe('CkeComponent', () => {
  let component: CkeComponent;
  let fixture: ComponentFixture<CkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
