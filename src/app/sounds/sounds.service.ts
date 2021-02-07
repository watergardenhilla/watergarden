import {Injectable} from '@angular/core';

const NUM_OF_AUDIOS = 8;

@Injectable({
  providedIn: 'root'
})
export class SoundsService {
  audios = new Map<number, string>();

  constructor() {
    for (let i = 1; i < NUM_OF_AUDIOS; i++) {
      const audio = new Audio();
      audio.src = `/assets/sounds/${i}.mp3`;
      audio.load();
      this.audios.set(i, `/assets/sounds/${i}.mp3`);
    }
  }

  playCyclePosition(position: number): void {
    console.log(`sounds: position: ${position}`);
    if (!this.audios.has(position)) {
      console.log('no audio for position.');
      return;
    }
    const audio = new Audio();
    audio.src = this.audios.get(position);
    audio.load();
    audio.play().then((e) => console.log('played'));
  }
}
