import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeKineComponent } from './programme-kine.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('ProgrammeKineComponent', () => {
  let component: ProgrammeKineComponent;
  let fixture: ComponentFixture<ProgrammeKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeKineComponent,MatAutocompleteModule ],
      imports:[ HttpClientModule,MatAutocompleteModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
