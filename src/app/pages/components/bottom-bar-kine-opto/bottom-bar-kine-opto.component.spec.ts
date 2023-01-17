import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarKineOptoComponent } from './bottom-bar-kine-opto.component';

describe('BottomBarKineOptoComponent', () => {
  let component: BottomBarKineOptoComponent;
  let fixture: ComponentFixture<BottomBarKineOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarKineOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBarKineOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
