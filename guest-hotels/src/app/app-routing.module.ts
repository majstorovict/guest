import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "hotels", component: HotelsComponent},
  { path: "guest", component: GuestComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
