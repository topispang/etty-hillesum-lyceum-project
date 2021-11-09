import { Component } from '@angular/core';

@Component({
  selector: 'input-app',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  input: string;
  output: string;

  verplaats() {
    this.output = this.input;
    this.input = '';
  }
}
