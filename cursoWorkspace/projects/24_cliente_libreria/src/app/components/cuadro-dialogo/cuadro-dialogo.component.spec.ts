import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoComponent } from './cuadro-dialogo.component';

describe('CuadroDialogoComponent', () => {
  let component: CuadroDialogoComponent;
  let fixture: ComponentFixture<CuadroDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
