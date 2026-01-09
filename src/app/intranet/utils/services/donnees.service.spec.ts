import { TestBed } from '@angular/core/testing';

import { DonneesService } from './donnees.service';

describe('Donnees', () => {
  let service: DonneesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
