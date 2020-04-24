import { TestBed } from '@angular/core/testing';

import { MetodosServiceService } from './metodos-service.service';

describe('MetodosServiceService', () => {
  let service: MetodosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
