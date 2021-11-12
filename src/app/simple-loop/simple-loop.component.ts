import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loop',
  templateUrl: './simple-loop.component.html',
  styleUrls: ['./simple-loop.component.css'],
})
export class SimpleLoopComponent implements OnInit {
  input: number;
  aantal: number = 10;
  texts: number[];

  ngOnInit() {
    this.clear();
  }

  update() {
    this.clear();
    for (let index = 0; index < this.aantal; index++) {
      this.texts.push(this.input);
    }
    console.log(this.texts);
  }

  clear() {
    this.texts = Array<number>();
  }
}
