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
  eerste: number;
  tweede: number;
  input: number;
  action: Actions;

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
    this.tweede = this.input;
    this.calculatorExtraService.setGetal(this.input);
    this.som = ' = ' + this.calculatorExtraService.bereken();
    this.clearInput();
  }

  eersteActie(action: Actions) {
    if (this.action != Actions.GEEN) {
      this.clearDisplay();
    }
    this.eerste = this.input;
    this.action = action;
    this.calculatorExtraService.setGetal(this.input);
    this.calculatorExtraService.setAction(action);
    this.clearInput();
  }

  clear() {
    this.clearDisplay();
    this.clearInput();
    this.calculatorExtraService.reset();
  }

  clearDisplay() {
    this.som = '';
    this.eerste = null;
    this.tweede = null;
    this.action = Actions.GEEN;
  }

  clearInput() {
    this.input = null;
  }
}
