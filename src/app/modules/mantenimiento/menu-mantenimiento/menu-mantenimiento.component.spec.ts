import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMantenimientoComponent } from './menu-mantenimiento.component';

describe('MenuMantenimientoComponent', () => {
  let component: MenuMantenimientoComponent;
  let fixture: ComponentFixture<MenuMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
