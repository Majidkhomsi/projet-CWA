import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SInscrireComponent } from './s-inscrire.component';

describe('SInscrireComponent', () => {
  let component: SInscrireComponent;
  let fixture: ComponentFixture<SInscrireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SInscrireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SInscrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
