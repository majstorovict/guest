import { Component, OnInit } from '@angular/core';
import { GuestService } from './guest.service';
import { Guests } from './guests';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  guests: Guests[];


  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.getGuest()
  }
  getGuest() {
    this.guestService.getGuestByGuestId().subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
