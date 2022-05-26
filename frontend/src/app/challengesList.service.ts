import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ChallengesList } from './challengesList';
import { CHALLENGESLIST } from './mock-challenges';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ChallengesListService {

  constructor(private messageService: MessageService) { }

  getChallenges(): Observable<ChallengesList[]> {
    const challenges = of(CHALLENGESLIST);
    this.messageService.add('ChallengesListService: fetched challenges');
    return challenges;
  }

  getChallengesList(id: number): Observable<ChallengesList> {
    // For now, assume that a workouts with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const challengesList = CHALLENGESLIST.find(c => c.id === id)!;
    this.messageService.add(`ChallengesListService: fetched challengesList id=${id}`);
    return of(challengesList);
  }

}