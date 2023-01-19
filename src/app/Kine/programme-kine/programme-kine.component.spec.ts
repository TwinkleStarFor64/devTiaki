import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeKineComponent } from './programme-kine.component';

describe('ProgrammeKineComponent', () => {
  let component: ProgrammeKineComponent;
  let fixture: ComponentFixture<ProgrammeKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
