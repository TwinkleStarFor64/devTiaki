import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsComponent } from './plats.component';
import { HttpClientModule } from '@angular/common/http';

describe('PlatsComponent', () => {
  let component: PlatsComponent;
  let fixture: ComponentFixture<PlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatsComponent ],
      imports:[ HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
