import { TestBed } from '@angular/core/testing';

import { TableauService } from './tableau.service';

describe('TableauService', () => {
  let service: TableauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
