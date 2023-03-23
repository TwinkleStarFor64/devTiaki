import { TestBed } from '@angular/core/testing';

import { PlatsService } from './plats.service';

describe('PlatsService', () => {
  let service: PlatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
