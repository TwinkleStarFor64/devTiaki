import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilNutri } from './accueil-nutri';

describe('AccueilNutri', () => {
  let component: AccueilNutri;
  let fixture: ComponentFixture<AccueilNutri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilNutri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilNutri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
