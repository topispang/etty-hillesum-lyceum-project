import { Injectable } from '@angular/core';

import { Actions } from './actions';

@Injectable({ providedIn: 'root' })
export class CalculatorExtraService {
  action: Actions;
  eersteGetal: number;
  tweedeGetal: number;

  constructor() {
    this.action = Actions.GEEN;
  }

  setAction(action: Actions) {
    this.action = action;
  }

  setGetal(getal: number) {
    if (this.action == Actions.GEEN) {
      this.eersteGetal = getal;
    } else {
      this.tweedeGetal = getal;
    }
  }

  bereken(): number {
    let uitkomst: number;

    switch (this.action) {
      case Actions.OPTELLEN:
        uitkomst = +this.eersteGetal + +this.tweedeGetal;
        break;
      case Actions.AFTREKKEN:
        uitkomst = +this.eersteGetal - +this.tweedeGetal;
        break;
      case Actions.DELEN:
        uitkomst = +this.eersteGetal / +this.tweedeGetal;
        break;
      case Actions.VERMENIGVULDIGEN:
        uitkomst = +this.eersteGetal * +this.tweedeGetal;
        break;
      default:
        uitkomst = null;
        break;
    }

    this.reset();
    return uitkomst;
  }

  reset() {
    this.eersteGetal = null;
    this.tweedeGetal = null;
    this.action = Actions.GEEN;
  }
}
