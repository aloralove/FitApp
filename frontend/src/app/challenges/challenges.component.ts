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


  constructor(
    private challengesListService: ChallengesListService,

    ) { }
    
    ngOnInit(): void {
      this.getChallengesLists();
    }
  
    getChallengesLists(): void {
      this.challengesListService.getChallengesLists()
          .subscribe(challenges => {
              console.log(challenges)
              this.challenges = challenges
            });
    }

  }