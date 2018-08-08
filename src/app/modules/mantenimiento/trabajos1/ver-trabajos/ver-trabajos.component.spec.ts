import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTrabajosComponent } from './ver-trabajos.component';

describe('VerTrabajosComponent', () => {
  let component: VerTrabajosComponent;
  let fixture: ComponentFixture<VerTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
