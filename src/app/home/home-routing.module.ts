import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.component';
import { PlayfileComponent } from './playfile/playfile.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'playfile',
        component: PlayfileComponent,
      },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}