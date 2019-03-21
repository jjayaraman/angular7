import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('should add correctly', () => {
    const service = TestBed.get(CalculatorService);
    expect(6).toBe(service.add(1, 5));
  });

  it('should not add correctly', () => {
    const service = TestBed.get(CalculatorService);
    expect(2).not.toBe(service.add(1, 5));
  });
});
