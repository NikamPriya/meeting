import { TestBed } from '@angular/core/testing';

import { ClientPackageService } from './client-package.service';

describe('ClientPackageService', () => {
  let service: ClientPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
