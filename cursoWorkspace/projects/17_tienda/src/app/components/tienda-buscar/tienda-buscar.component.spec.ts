import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBuscarComponent } from './tienda-buscar.component';

describe('TiendaBuscarComponent', () => {
  let component: TiendaBuscarComponent;
  let fixture: ComponentFixture<TiendaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaBuscarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
