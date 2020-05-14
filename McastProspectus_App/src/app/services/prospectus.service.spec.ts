import { TestBed } from '@angular/core/testing';

import { ProspectusService } from './prospectus.service';

describe('ProspectusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProspectusService = TestBed.get(ProspectusService);
    expect(service).toBeTruthy();
  });
});
