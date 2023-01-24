import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionOptoComponent } from './progression-opto.component';

describe('ProgressionOptoComponent', () => {
  let component: ProgressionOptoComponent;
  let fixture: ComponentFixture<ProgressionOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressionOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
