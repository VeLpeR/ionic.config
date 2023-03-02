import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() passData: any;
  constructor(private router:Router, private modalCtrl: ModalController) {
    
   }

  play() {
    this.modalCtrl.dismiss({ confirm: true})
  }
  ngOnInit() {
    console.log('Show', this.passData);
  }
  close = () => {
    this.modalCtrl.dismiss({confirm: false});
  }
  

  
}
