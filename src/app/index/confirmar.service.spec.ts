import { TestBed } from '@angular/core/testing';

import { ConfirmarService } from './confirmar.service';

describe('ConfirmarService', () => {
  let service: ConfirmarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
