import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HotelsService } from './hotels/hotels.service';
import { GuestService } from './guest/guest.service';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    HotelsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HotelsService, GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
