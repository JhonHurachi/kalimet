import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoActivComponent } from './nuevo-activ.component';

describe('NuevoActivComponent', () => {
  let component: NuevoActivComponent;
  let fixture: ComponentFixture<NuevoActivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoActivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoActivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
