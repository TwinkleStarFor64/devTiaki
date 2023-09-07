import { TestBed } from '@angular/core/testing';

import { ProgrammeKineService } from './programme-kine.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProgrammeKineService', () => {
  let service: ProgrammeKineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule]});
    service = TestBed.inject(ProgrammeKineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
