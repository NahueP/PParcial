import { TestBed } from '@angular/core/testing';

import { DatosgitService } from './datosgit.service';

describe('DatosgitService', () => {
  let service: DatosgitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosgitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
