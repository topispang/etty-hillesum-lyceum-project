import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loop',
  templateUrl: './simple-loop.component.html',
  styleUrls: ['./simple-loop.component.css'],
})
export class SimpleLoopComponent implements OnInit {
  input: number;
  texts: number[];

  constructor() {}

  ngOnInit() {
    this.texts = Array<number>();
  }

  update() {
    for (let index = 0; index < 10; index++) {
      this.texts.push(this.input);
    }
  }
}
