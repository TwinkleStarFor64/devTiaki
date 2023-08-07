import { TestBed } from '@angular/core/testing';

import { KineService } from './kine.service';

describe('KineService', () => {
  let service: KineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
