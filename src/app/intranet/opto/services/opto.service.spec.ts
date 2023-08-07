import { TestBed } from '@angular/core/testing';

import { OptoService } from './opto.service';

describe('OptoService', () => {
  let service: OptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
