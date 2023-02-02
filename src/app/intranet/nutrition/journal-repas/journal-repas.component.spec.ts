import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalRepasComponent } from './journal-repas.component';

describe('JournalRepasComponent', () => {
  let component: JournalRepasComponent;
  let fixture: ComponentFixture<JournalRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
