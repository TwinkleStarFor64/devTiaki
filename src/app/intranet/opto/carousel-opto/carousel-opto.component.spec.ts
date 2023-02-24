import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOptoComponent } from './carousel-opto.component';

describe('CarouselOptoComponent', () => {
  let component: CarouselOptoComponent;
  let fixture: ComponentFixture<CarouselOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
