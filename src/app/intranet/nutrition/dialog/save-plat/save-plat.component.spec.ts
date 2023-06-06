import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePlatComponent } from './save-plat.component';

describe('SavePlatComponent', () => {
  let component: SavePlatComponent;
  let fixture: ComponentFixture<SavePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
