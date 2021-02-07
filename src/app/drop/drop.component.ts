import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {SoundsService} from '../sounds/sounds.service';

const NUM_OF_PHOTOS = 8;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {
  @Input() id: string;
  index = new BehaviorSubject(0);
  curSrc = this.index.pipe(map(v => `/assets/images/${v}.svg`));
  sounds: SoundsService;
  constructor(sounds: SoundsService) {
    this.sounds = sounds;
  }

  ngOnInit(): void {
  }

  cycle(): void {
    this.index.next((this.index.value + 1) % NUM_OF_PHOTOS);
    this.sounds.playCyclePosition(this.index.value);
  }
}
