import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoComponent } from './catalogo.component';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
