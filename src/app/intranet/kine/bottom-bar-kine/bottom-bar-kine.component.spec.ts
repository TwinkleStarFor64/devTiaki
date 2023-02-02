import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarKineComponent } from './bottom-bar-kine.component';

describe('BottomBarKineComponent', () => {
  let component: BottomBarKineComponent;
  let fixture: ComponentFixture<BottomBarKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBarKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
