/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstagramApiService } from './instagram-api.service';

describe('InstagramApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramApiService]
    });
  });

  it('should ...', inject([InstagramApiService], (service: InstagramApiService) => {
    expect(service).toBeTruthy();
  }));
});
