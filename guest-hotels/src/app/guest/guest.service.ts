import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  getGuestByGuestId(){
    return this.http.get<any>(environment.API + 'guests/GET')
  }
}
