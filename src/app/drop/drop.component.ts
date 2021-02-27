import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {SoundsService} from '../sounds/sounds.service';

const NUM_OF_PHOTOS = 8;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent {
  @Input() id: [number, number];
  index = new BehaviorSubject(0);
  curSrc = this.index.pipe(map(v => `/assets/images/${v}.svg`));
  sounds: SoundsService;
  constructor(sounds: SoundsService) {
    this.sounds = sounds;
  }

  /**
   * Updates the curSrc to cycle through the possible images and play the matching sound.
   */
  cycle(): void {
    this.index.next((this.index.value + 1) % NUM_OF_PHOTOS);
    this.sounds.playCyclePosition(this.index.value);
  }

  /**
   * Get css class to hide in specific media size.
   */
  cssClass(): string {
    const res = [];
    const [column, row] = this.id;
    if (row === 0 || (row === 1 && column > 0 && column < 5)) {
      res.push('hidden-small');
    }
    if (row === 0 && column < 13) {
      res.push('hidden-big');
    }
    return res.join(' ');
  }
}
