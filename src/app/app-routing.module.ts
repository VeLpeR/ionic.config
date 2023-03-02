import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { PlayfileComponent } from './home/playfile/playfile.component';
import { SplashComponent } from './splash/splash.component';
const routes: Routes = [
{
  path:'splash',
  component:SplashComponent
},
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'playfile',
    component: PlayfileComponent
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



 
