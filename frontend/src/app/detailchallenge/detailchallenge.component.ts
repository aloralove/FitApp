import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChallengesList } from '../challengesList';
import { ChallengesListService } from '../challengesList.service';


@Component({
  selector: 'app-detailchallenge',
  templateUrl: './detailchallenge.component.html',
  styleUrls: ['./detailchallenge.component.css']
})
export class DetailchallengeComponent implements OnInit {

  challengesList: ChallengesList | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private challengesListService: ChallengesListService
  ) { }

  ngOnInit(): void {
    this.getChallengesList();
  }

  getChallengesList(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.challengesListService.getChallengesList(id)
      .subscribe(challengesList => {
        this.challengesList = challengesList
      });
  }
  goBack(): void {
    this.location.back();
  }
}
