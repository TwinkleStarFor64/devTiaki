import { TestBed } from '@angular/core/testing';

import { InfosService } from './infos.service';

describe('InfosService', () => {
  let service: InfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
