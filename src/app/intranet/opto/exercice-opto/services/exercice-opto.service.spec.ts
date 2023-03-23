import { TestBed } from '@angular/core/testing';

import { ExerciceOptoService } from './exercice-opto.service';

describe('ExerciceOptoService', () => {
  let service: ExerciceOptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciceOptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
