import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarComponent } from './aside-bar.component';

describe('AsidebarComponent', () => {
  let component: AsideBarComponent;
  let fixture: ComponentFixture<AsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
