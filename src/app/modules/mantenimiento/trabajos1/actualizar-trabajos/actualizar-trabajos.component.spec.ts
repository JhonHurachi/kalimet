import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTrabajosComponent } from './actualizar-trabajos.component';

describe('ActualizarTrabajosComponent', () => {
  let component: ActualizarTrabajosComponent;
  let fixture: ComponentFixture<ActualizarTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
