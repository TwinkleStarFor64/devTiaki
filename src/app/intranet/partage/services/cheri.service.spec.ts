import { TestBed } from '@angular/core/testing';

import { CheriService } from './cheri.service';

describe('CheriService', () => {
  let service: CheriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
