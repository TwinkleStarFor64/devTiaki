import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionKineComponent } from './progression-kine.component';

describe('ProgressionKineComponent', () => {
  let component: ProgressionKineComponent;
  let fixture: ComponentFixture<ProgressionKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressionKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
