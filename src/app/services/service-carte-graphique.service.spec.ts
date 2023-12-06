import { TestBed } from '@angular/core/testing';

import { ServiceCarteGraphiqueService } from './service-carte-graphique.service';

describe('ServiceCarteGraphiqueService', () => {
  let service: ServiceCarteGraphiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCarteGraphiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
