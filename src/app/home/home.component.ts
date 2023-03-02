import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomePage implements AfterViewInit, OnInit {
  @ViewChild("audio") audio:ElementRef;
  isOpen = false;
ngOnInit(){
  
}

  ngAfterViewInit(){
   
    this.play();
  }

 play(){
    this.audio.nativeElement.oncanplaythrough = () => {
      console.log('playing')
      this.audio.nativeElement.play();
    }
 }
imageArray:any =['assets/images/a.png',
                 'assets/images/b_locked.png',
                 'assets/images/c_locked.png',
                 'assets/images/d_locked.png',
                 'assets/images/e_locked.png',
                 'assets/images/f_locked.png',
                 'assets/images/g_locked.png',
                 'assets/images/h_locked.png',
                 'assets/images/i_locked.png',
                 ]
  constructor(private modal: ModalController, private router: Router) {}
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  }
  
  
  async showPopover(event:any, id:any) {
    console.log("call")
    const popover = await this.modal.create({
      component: PopupComponent,
      componentProps: { passData: id }
    });
    popover.present();

    let { data, role } = await popover.onWillDismiss();
    if (data.confirm) {
      this.audio.nativeElement.pause();
      this.router.navigate(['/playfile']);
    }
  }


}
