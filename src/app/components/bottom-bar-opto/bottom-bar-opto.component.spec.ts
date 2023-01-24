import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarOptoComponent } from './bottom-bar-opto.component';

describe('BottomBarOptoComponent', () => {
  let component: BottomBarOptoComponent;
  let fixture: ComponentFixture<BottomBarOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBarOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
