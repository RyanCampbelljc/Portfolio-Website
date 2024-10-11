import { TestBed } from '@angular/core/testing';

import { AboutImagesService } from './about-images.service';

describe('AboutImagesService', () => {
  let service: AboutImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
