import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NutritionList } from '../nutritionList';
import { NutritionListService } from '../nutritionList.service';


@Component({
  selector: 'app-detailnutrition',
  templateUrl: './detailnutrition.component.html',
  styleUrls: ['./detailnutrition.component.css']
})
export class DetailnutritionComponent implements OnInit {
  
  nutritionList: NutritionList | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private nutritionListService: NutritionListService

  ) { }

  ngOnInit(): void {
    this.getNutritionList();
  }

  getNutritionList(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.nutritionListService.getNutritionList(id)
      .subscribe(nutritionList => {
        this.nutritionList = nutritionList
      });
  }
  goBack(): void {
    this.location.back();
  }
}
