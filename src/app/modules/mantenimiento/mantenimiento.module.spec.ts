import { MantenimientoModule } from './mantenimiento.module';

describe('MantenimientoModule', () => {
  let mantenimientoModule: MantenimientoModule;

  beforeEach(() => {
    mantenimientoModule = new MantenimientoModule();
  });

  it('should create an instance', () => {
    expect(mantenimientoModule).toBeTruthy();
  });
});
