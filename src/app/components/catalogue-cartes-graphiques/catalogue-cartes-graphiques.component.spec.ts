import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueCartesGraphiquesComponent } from './catalogue-cartes-graphiques.component';

describe('CatalogueCartesGraphiquesComponent', () => {
  let component: CatalogueCartesGraphiquesComponent;
  let fixture: ComponentFixture<CatalogueCartesGraphiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueCartesGraphiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueCartesGraphiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
