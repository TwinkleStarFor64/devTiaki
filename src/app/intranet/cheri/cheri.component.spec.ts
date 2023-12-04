import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheriComponent } from './cheri.component';

describe('CheriComponent', () => {
  let component: CheriComponent;
  let fixture: ComponentFixture<CheriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheriComponent]
    });
    fixture = TestBed.createComponent(CheriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
