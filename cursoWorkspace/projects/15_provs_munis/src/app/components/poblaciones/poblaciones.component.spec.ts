import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionesComponent } from './poblaciones.component';

describe('PoblacionesComponent', () => {
  let component: PoblacionesComponent;
  let fixture: ComponentFixture<PoblacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoblacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
