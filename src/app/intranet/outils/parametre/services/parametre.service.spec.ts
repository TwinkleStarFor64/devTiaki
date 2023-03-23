import { TestBed } from '@angular/core/testing';

import { ParametreService } from './parametre.service';

describe('ParametreService', () => {
  let service: ParametreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
