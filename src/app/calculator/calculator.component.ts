import { Component } from '@angular/core';

@Component({
  selector: 'calculator-app',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  input: number;
  eersteGetal: number;
  tweedeGetal: number;
  som: string;

  optellen() {
    this.eersteGetal = this.input;
    this.input = null;
    this.updateSom();
  }

  uitrekenen() {
    this.tweedeGetal = this.input;
    this.input = null;
    this.updateSom();
  }

  updateSom() {
    if (this.tweedeGetal == null) {
      this.som = this.eersteGetal.toString();
    } else if (this.eersteGetal == null) {
      this.som =
        this.eersteGetal.toString() + ' + ' + this.tweedeGetal.toString();
    } else {
      let optelling = +this.eersteGetal + +this.tweedeGetal;

      this.som =
        this.eersteGetal.toString() +
        ' + ' +
        this.tweedeGetal.toString() +
        ' = ' +
        optelling.toString();
    }
  }
}
