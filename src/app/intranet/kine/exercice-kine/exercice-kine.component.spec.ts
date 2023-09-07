import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceKineComponent } from './exercice-kine.component';
import { HttpClientModule } from '@angular/common/http';

describe('ExerciceKineComponent', () => {
  let component: ExerciceKineComponent;
  let fixture: ComponentFixture<ExerciceKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceKineComponent ],
      imports:[ HttpClientModule ]
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
