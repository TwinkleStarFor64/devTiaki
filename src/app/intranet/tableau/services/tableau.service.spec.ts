import { TestBed } from '@angular/core/testing';

import { TableauService } from './tableau.service';
import { HttpClientModule } from '@angular/common/http';

describe('TableauService', () => {
  let service: TableauService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]});
    service = TestBed.inject(TableauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
