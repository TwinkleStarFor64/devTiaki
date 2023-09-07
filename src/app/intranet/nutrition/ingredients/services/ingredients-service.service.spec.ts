import { TestBed } from '@angular/core/testing';

import { IngredientsServiceService } from './ingredients-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('IngredientsServiceService', () => {
  let service: IngredientsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(IngredientsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
