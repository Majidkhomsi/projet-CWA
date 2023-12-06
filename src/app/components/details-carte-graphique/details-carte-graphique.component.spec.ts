import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCarteGraphiqueComponent } from './details-carte-graphique.component';

describe('DetailsCarteGraphiqueComponent', () => {
  let component: DetailsCarteGraphiqueComponent;
  let fixture: ComponentFixture<DetailsCarteGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCarteGraphiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCarteGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
