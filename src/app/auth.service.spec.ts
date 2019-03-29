import { TestBed } from '@angular/core/testing';

import { NewAuth } from './auth.service';

describe('NewAuth', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewAuth = TestBed.get(NewAuth);
    expect(service).toBeTruthy();
  });
});
