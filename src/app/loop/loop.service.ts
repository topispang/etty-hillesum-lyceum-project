import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Loop } from './loop';
import { LOOPS } from './mock-loop';

@Injectable({ providedIn: 'root' })
export class LoopService {
  getLoops(): Observable<Loop[]> {
    const heroes = of(LOOPS);
    return heroes;
  }

  getLoop(id: number): Observable<Loop> {
    const hero = LOOPS.find((h) => h.id === id)!;
    return of(hero);
  }
}
