import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopExerciceComponent } from './pop-exercice.component';

describe('PopExerciceComponent', () => {
  let component: PopExerciceComponent;
  let fixture: ComponentFixture<PopExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopExerciceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
