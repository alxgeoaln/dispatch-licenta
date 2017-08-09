import { TestBed, inject } from '@angular/core/testing';

import { GetLocationsService } from './get-locations.service';

describe('GetLocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLocationsService]
    });
  });

  it('should ...', inject([GetLocationsService], (service: GetLocationsService) => {
    expect(service).toBeTruthy();
  }));
});
