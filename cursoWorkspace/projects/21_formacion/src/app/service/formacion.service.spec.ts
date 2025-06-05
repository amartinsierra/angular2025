import { TestBed } from '@angular/core/testing';

import { FormacionService } from './formacion.service';

describe('FormacionService', () => {
  let service: FormacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
