import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.switch();
    }, 3000);
  }
  switch(): void {
    this.route.navigate(['/home']);
  }
}
