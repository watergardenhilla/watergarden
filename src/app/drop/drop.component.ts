import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

const NUM_OF_PHOTOS = 8;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {
  index = new BehaviorSubject(0);
  curSrc = this.index.pipe(map(v => `/assets/images/${v}.svg`));

  constructor() { }

  ngOnInit(): void {
  }

  cycle(): void {
    this.index.next((this.index.value + 1) % NUM_OF_PHOTOS);
  }
}
