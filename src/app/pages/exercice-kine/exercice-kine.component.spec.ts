import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceKineComponent } from './exercice-kine.component';

describe('ExerciceKineComponent', () => {
  let component: ExerciceKineComponent;
  let fixture: ComponentFixture<ExerciceKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
