import { Component, OnInit } from '@angular/core';

import { ChallengesList } from '../challengesList';
import { ChallengesListService } from '../challengesList.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})

export class ChallengesComponent implements OnInit {
  challenges: ChallengesList[] = [];
  todaysDate = new Date();

  constructor(
    private challengesListService: ChallengesListService,

    
    ) { }
    
    ngOnInit(): void {
      this.getChallenges();
    }
  
    getChallenges(): void {
      this.challengesListService.getChallengesLists()
          .subscribe(challenges => this.challenges = challenges);
    }
  
  
  }