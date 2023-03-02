import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  audioElement: HTMLAudioElement = new Audio('assets/audio/bgHomeMusic.mp3');

  play = () => {
    this.audioElement.autoplay = true;
    this.audioElement.play().then(() => {
      console.log('Audio Started...');
    });
  }

  pause = () => {
    this.audioElement.pause();//
  }
}
