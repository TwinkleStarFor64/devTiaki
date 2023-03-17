import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KineComponent } from './kine.component';

describe('KineComponent', () => {
  let component: KineComponent;
  let fixture: ComponentFixture<KineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
