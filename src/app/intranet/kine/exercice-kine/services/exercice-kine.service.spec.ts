import { TestBed } from '@angular/core/testing';

import { ExerciceKineService } from './exercice-kine.service';

describe('ExerciceKineService', () => {
  let service: ExerciceKineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciceKineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
