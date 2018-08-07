import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivsComponent } from './activs.component';

describe('ActivsComponent', () => {
  let component: ActivsComponent;
  let fixture: ComponentFixture<ActivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
