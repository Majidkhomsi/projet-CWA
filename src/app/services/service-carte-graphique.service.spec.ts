import { TestBed } from '@angular/core/testing';
import { ServiceCarteGraphique } from './service-carte-graphique.service';

describe('ServiceCarteGraphique', () => {
  let service: ServiceCarteGraphique;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCarteGraphique);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
