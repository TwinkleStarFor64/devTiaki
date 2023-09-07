import { TestBed } from '@angular/core/testing';

import { KineService } from './kine.service';
import { HttpClientModule } from '@angular/common/http';

describe('KineService', () => {
  let service: KineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      imports:[ HttpClientModule]
    });
    service = TestBed.inject(KineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
