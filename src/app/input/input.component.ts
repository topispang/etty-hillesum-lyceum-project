import { Component } from '@angular/core';

@Component({
  selector: 'input-app',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  invoer: string = '';
  uitvoer: string = '';

  verplaats() {
    this.uitvoer = this.invoer;
    this.invoer = '';
  }
}
