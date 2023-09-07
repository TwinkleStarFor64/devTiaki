import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreComponent } from './parametre.component';
import { HttpClientModule } from '@angular/common/http';

describe('ParametreComponent', () => {
  let component: ParametreComponent;
  let fixture: ComponentFixture<ParametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreComponent,HttpClientModule ],
      imports:[ HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
