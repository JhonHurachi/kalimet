import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerActivsComponent } from './ver-activs.component';

describe('VerActivsComponent', () => {
  let component: VerActivsComponent;
  let fixture: ComponentFixture<VerActivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerActivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerActivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
