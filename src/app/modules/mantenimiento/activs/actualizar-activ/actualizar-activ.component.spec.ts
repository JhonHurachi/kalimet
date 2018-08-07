import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarActivComponent } from './actualizar-activ.component';

describe('ActualizarActivComponent', () => {
  let component: ActualizarActivComponent;
  let fixture: ComponentFixture<ActualizarActivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarActivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarActivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
