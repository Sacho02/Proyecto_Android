import { TestBed } from '@angular/core/testing';

import { DatosRegionalesService } from './location.service';
import { DatosComunalesService } from './location.service';

describe('DatosRegionalesService', () => {
  let service: DatosRegionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosRegionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('DatosComunalesService', () => {
  let service: DatosComunalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosComunalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
