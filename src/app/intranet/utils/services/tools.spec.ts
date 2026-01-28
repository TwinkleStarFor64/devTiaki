import { TestBed } from '@angular/core/testing';

import { Tools } from '../tools.service';

describe('Tools', () => {
  let service: Tools;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tools);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
