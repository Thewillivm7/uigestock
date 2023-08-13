import { TestBed } from '@angular/core/testing';

import { ServiceEntreeService } from './service-entree.service';

describe('ServiceEntreeService', () => {
  let service: ServiceEntreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEntreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
