import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExOptoComponent } from './modal-ex-opto.component';

describe('ModalExOptoComponent', () => {
  let component: ModalExOptoComponent;
  let fixture: ComponentFixture<ModalExOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
