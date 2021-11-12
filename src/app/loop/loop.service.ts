import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Loop } from './loop';
import { LOOPS } from './mock-loop';

@Injectable({ providedIn: 'root' })
export class LoopService {
  getLoops(): Observable<Loop[]> {
    const loops = of(LOOPS);
    return loops;
  }

  getLoop(id: number): Observable<Loop> {
    const loop = LOOPS.find((l) => l.id === id)!;
    return of(loop);
  }
}
