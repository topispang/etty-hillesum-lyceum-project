import { Component, OnInit } from '@angular/core';

import { Loop } from './loop';
import { LoopService } from './loop.service';

@Component({
  selector: 'loop-app',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css'],
})
export class LoopComponent implements OnInit {
  loops: Loop[] = [];

  constructor(private loopService: LoopService) {}

  ngOnInit() {
    this.getLoops();
  }

  getLoops(): void {
    this.loopService.getLoops().subscribe((loops) => (this.loops = loops));
  }
}
