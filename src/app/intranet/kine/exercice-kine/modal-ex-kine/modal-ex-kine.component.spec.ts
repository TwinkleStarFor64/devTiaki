import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExKineComponent } from './modal-ex-kine.component';

describe('ModalExKineComponent', () => {
  let component: ModalExKineComponent;
  let fixture: ComponentFixture<ModalExKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
