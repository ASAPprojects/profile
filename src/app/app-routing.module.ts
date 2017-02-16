import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageFrameComponent }   from './image-frame/image-frame.component';
import { WishesComponent }   from './wishes/wishes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: ImageFrameComponent },
  { path: 'wishes', component: WishesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
