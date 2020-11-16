import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotels } from './hotels';


@Injectable()

export class HotelsService {


  constructor(private httpclient: HttpClient) { }

  getHotel(): Observable<any> {
    return this.httpclient.get(environment.API + 'hotels/GET')
  }
  //getHotelByHotelId(): Observable<any> {
    //return this.httpclient.get(environment.API + 'hotels/GET')
  //}
}
