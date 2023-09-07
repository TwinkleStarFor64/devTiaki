import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueComponent } from './historique.component';
import { HttpClientModule } from '@angular/common/http';

describe('HistoriqueComponent', () => {
  let component: HistoriqueComponent;
  let fixture: ComponentFixture<HistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriqueComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
