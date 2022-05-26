import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NutritionList } from './nutritionList';
import { NUTRITIONLIST } from './mock-nutrition';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class NutritionListService {

  constructor(private messageService: MessageService) { }

  getNutrition(): Observable<NutritionList[]> {
    const nutrition = of(NUTRITIONLIST);
    this.messageService.add('NutritionListService: fetched nutrition');
    return nutrition;
  }

  getNutritionList(id: number): Observable<NutritionList> {
    // For now, assume that a workouts with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const nutritionList = NUTRITIONLIST.find(n => n.id === id)!;
    this.messageService.add(`NutritionListService: fetched nutritionList id=${id}`);
    return of(nutritionList);
  }

}