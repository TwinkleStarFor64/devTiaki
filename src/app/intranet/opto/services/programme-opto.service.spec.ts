import { TestBed } from '@angular/core/testing';

import { ProgrammeOptoService } from './programme-opto.service';

describe('ProgrammeOptoService', () => {
  let service: ProgrammeOptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammeOptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
