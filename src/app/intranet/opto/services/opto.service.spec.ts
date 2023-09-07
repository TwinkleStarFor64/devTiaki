import { TestBed } from '@angular/core/testing';

import { OptoService } from './opto.service';
import { HttpClientModule } from '@angular/common/http';

describe('OptoService', () => {
  let service: OptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule]});
    service = TestBed.inject(OptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
