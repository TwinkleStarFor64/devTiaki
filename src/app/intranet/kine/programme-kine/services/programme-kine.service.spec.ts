import { TestBed } from '@angular/core/testing';

import { ProgrammeKineService } from './programme-kine.service';

describe('ProgrammeKineService', () => {
  let service: ProgrammeKineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammeKineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
