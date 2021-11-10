import { Component } from '@angular/core';

import { Actions } from './actions';
import { CalculatorExtraService } from './calculator-extra.service';

@Component({
  selector: 'calculator-extra-app',
  templateUrl: './calculator-extra.component.html',
  styleUrls: ['./calculator-extra.component.css'],
})
export class CalculatorExtraComponent {
  som: string;
  eerste: string;
  action: Actions;
  tweede: string;
  input: number;

  constructor(private calculatorExtraService: CalculatorExtraService) {}

  optellen() {
    this.eersteActie(Actions.OPTELLEN);
  }

  aftrekken() {
    this.eersteActie(Actions.AFTREKKEN);
  }

  vermenigvuldigen() {
    this.eersteActie(Actions.VERMENIGVULDIGEN);
  }

  delen() {
    this.eersteActie(Actions.DELEN);
  }

  bereken() {
    this.tweede = this.input.toString();
    this.calculatorExtraService.setGetal(this.input);
    this.som = ' = ' + this.calculatorExtraService.bereken().toString();
    this.clearInput();
  }

  eersteActie(action: Actions) {
    this.eerste = this.input.toString();
    this.action = action;
    this.calculatorExtraService.setGetal(this.input);
    this.calculatorExtraService.setAction(action);
    this.clearInput();
  }

  clear() {
    this.som = '';
    this.eerste = '';
    this.tweede = '';
    this.action = Actions.GEEN;
    this.clearInput();
    this.calculatorExtraService.reset();
  }

  clearInput() {
    this.input = null;
  }
}
