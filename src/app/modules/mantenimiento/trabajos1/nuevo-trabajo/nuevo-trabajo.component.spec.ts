import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTrabajoComponent } from './nuevo-trabajo.component';

describe('NuevoTrabajoComponent', () => {
  let component: NuevoTrabajoComponent;
  let fixture: ComponentFixture<NuevoTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
