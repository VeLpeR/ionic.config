import { OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

    @ViewChild('drawer') drawer!: MatDrawer;
    swipeStart: any;
    touchStartEvent: any;
    touchEndEvent: any;

    closeDrawer = () => {
        this.drawer.close();
    }
    ngOnInit(): void {
        this.watchForSwipe();
    }

    ngOnDestroy(): void {
        removeEventListener('touchstart',this.touchStartEvent);
        removeEventListener('touchend',this.touchEndEvent);
    }
    watchForSwipe = () => {
        this.touchStartEvent = addEventListener('touchstart',(event: any) => {
          // console.log('touchStart',event);
         this.swipeStart = event.changedTouches[0].clientX
        })
       this.touchEndEvent=  addEventListener('touchend',(event: any) => {
          // console.log('touchEnd',event);
         let temp = event.changedTouches[0].clientX;
         if(this.swipeStart >= 0 && this.swipeStart < 50){
          let diff = temp - this.swipeStart;
          if(diff > 100){
            // 
            this.drawer.open();
          }
         }
        })
      }
    
}