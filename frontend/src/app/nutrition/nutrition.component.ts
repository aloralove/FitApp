import { Component, OnInit } from '@angular/core';

import { NutritionList } from '../nutritionList';
import { NutritionListService } from '../nutritionList.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  nutrition: NutritionList[] = [];
  todaysDate = new Date();

  constructor(
    private nurtitionListService: NutritionListService,
    ) { }

  ngOnInit(): void {
    this.getNutrition();
  }

  getNutrition(): void {
    this.nurtitionListService.getNutrition()
        .subscribe(nutrition => this.nutrition = nutrition);
  }


}