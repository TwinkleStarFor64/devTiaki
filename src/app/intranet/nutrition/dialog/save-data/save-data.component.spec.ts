import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDataComponent } from './save-data.component';

describe('SaveDataComponent', () => {
  let component: SaveDataComponent;
  let fixture: ComponentFixture<SaveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
