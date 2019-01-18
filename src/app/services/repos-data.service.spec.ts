import { TestBed, inject } from '@angular/core/testing';

import { ReposDataService } from './repos-data.service';

describe('ReposDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReposDataService]
    });
  });

  it('should be created', inject([ReposDataService], (service: ReposDataService) => {
    expect(service).toBeTruthy();
  }));
});
