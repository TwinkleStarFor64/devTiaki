import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusComponent } from './menus.component';
import { HttpClientModule } from '@angular/common/http';

describe('MenusComponent', () => {
  let component: MenusComponent;
  let fixture: ComponentFixture<MenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusComponent ],
      imports:[ HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
