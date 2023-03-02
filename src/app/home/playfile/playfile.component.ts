import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AudioService } from 'src/app/audio.service';

@Component({
  selector: 'app-playfile',
  templateUrl: './playfile.component.html',
  styleUrls: ['./playfile.component.scss'],
})
export class PlayfileComponent implements OnInit {
  // @ViewChild("audio") audio:any;
  // isOpen = false;
  constructor(private location:Location, private audioService: AudioService) { }

  ngOnInit() {
  //   setInterval(
  //     // this.audio.nativeElement.oncanplaythrough = () => {
  //     //   console.log('playing')
  //     //   this.audio.nativeElement.play();
  //     },20000);
  // }
  }
  close = () => {
    this.audioService.play();
    this.location.back();
  }
  
}
