import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Redbricks_Frontend';
  swipeStart: number = 0;

  ngOnInit(): void {
// this.watchForSwipe();
  }


}
