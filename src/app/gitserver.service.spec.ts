import { TestBed } from '@angular/core/testing';

import { GitserverService } from './gitserver.service';

describe('GitserverService', () => {
  let service: GitserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
