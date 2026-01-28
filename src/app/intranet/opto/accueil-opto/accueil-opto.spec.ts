import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilOpto } from './accueil-opto';

describe('AccueilOpto', () => {
  let component: AccueilOpto;
  let fixture: ComponentFixture<AccueilOpto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilOpto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilOpto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
