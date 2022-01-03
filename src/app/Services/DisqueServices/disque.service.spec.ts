import { TestBed } from '@angular/core/testing';

import { DisqueService } from './disque.service';

describe('DisqueService', () => {
  let service: DisqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
