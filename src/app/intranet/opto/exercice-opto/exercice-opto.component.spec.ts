import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceOptoComponent } from './exercice-opto.component';

describe('ExerciceOptoComponent', () => {
  let component: ExerciceOptoComponent;
  let fixture: ComponentFixture<ExerciceOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
