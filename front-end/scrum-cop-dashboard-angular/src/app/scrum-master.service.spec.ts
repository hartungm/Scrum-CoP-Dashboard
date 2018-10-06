import { TestBed } from '@angular/core/testing';

import { ScrumMasterService } from './scrum-master.service';

describe('ScrumMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrumMasterService = TestBed.get(ScrumMasterService);
    expect(service).toBeTruthy();
  });
});
