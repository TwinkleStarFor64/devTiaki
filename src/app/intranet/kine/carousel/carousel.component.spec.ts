import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselKineComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselKineComponent;
  let fixture: ComponentFixture<CarouselKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
