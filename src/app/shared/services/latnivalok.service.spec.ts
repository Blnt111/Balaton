import { TestBed } from '@angular/core/testing';

import { LatnivalokService } from './latnivalok.service';

describe('LatnivalokService', () => {
  let service: LatnivalokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatnivalokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
