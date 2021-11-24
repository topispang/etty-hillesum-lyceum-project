import { Component } from '@angular/core';

@Component({
  selector: 'calculator-app',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  invoer: number;
  eersteGetal: number;
  tweedeGetal: number;
  som: string;

  clear() {
    this.invoer = null;
    this.eersteGetal = null;
    this.tweedeGetal = null;
    this.som = '';
  }

  optellen() {
    this.eersteGetal = this.invoer;
    this.invoer = null;
    this.updateSom();
  }

  uitrekenen() {
    this.tweedeGetal = this.invoer;
    this.invoer = null;
    this.updateSom();
  }

  updateSom() {
    if (this.tweedeGetal == null) {
      this.som = this.eersteGetal.toString();
    } else if (this.eersteGetal != null && this.tweedeGetal != null) {
      this.getallenOptellen(this.eersteGetal, this.tweedeGetal);
    } else {
      this.clear();
    }
  }

  getallenOptellen(eerste: number, tweede: number) {
    let optelling = +eerste + +tweede;
    this.som =
      this.eersteGetal.toString() +
      ' + ' +
      this.tweedeGetal.toString() +
      ' = ' +
      optelling.toString();
  }
}
