import { TestBed } from '@angular/core/testing';

import { NutritionListService } from './nutritionList.service';

describe('NutritionListService', () => {
  let service: NutritionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
