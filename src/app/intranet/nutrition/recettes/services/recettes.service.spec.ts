import { TestBed } from '@angular/core/testing';

import { RecettesService } from './recettes.service';
import { HttpClientModule } from '@angular/common/http';

describe('RecettesService', () => {
  let service: RecettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(RecettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
