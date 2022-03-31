import { TestBed } from '@angular/core/testing';

import { CompilerService } from './compiler.service';

describe('CompilorService', () => {
  let service: CompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
