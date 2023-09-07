import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SavePlatComponent } from './save-plat.component';
import { HttpClientModule } from '@angular/common/http';

describe('SavePlatComponent', () => {
  let component: SavePlatComponent;
  let fixture: ComponentFixture<SavePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePlatComponent, HttpClientModule, MatDialogModule ],
      imports: [
        MatDialogModule,
        HttpClientModule
      ],
      providers: [
        { provide: MatDialogRef, useValue:{} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
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
