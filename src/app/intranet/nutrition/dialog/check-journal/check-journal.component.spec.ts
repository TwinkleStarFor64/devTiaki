import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckJournalComponent } from './check-journal.component';

describe('CheckJournalComponent', () => {
  let component: CheckJournalComponent;
  let fixture: ComponentFixture<CheckJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
