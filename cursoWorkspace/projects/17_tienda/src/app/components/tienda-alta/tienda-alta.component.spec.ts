import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaAltaComponent } from './tienda-alta.component';

describe('TiendaAltaComponent', () => {
  let component: TiendaAltaComponent;
  let fixture: ComponentFixture<TiendaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
