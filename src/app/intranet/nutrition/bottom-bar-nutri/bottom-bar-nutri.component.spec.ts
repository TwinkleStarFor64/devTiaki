import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarNutriComponent } from './bottom-bar-nutri.component';

describe('BottomBarNutriComponent', () => {
  let component: BottomBarNutriComponent;
  let fixture: ComponentFixture<BottomBarNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBarNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
