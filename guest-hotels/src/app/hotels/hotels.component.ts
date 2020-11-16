import { Component, OnInit } from '@angular/core';
import { Hotels } from './hotels';
import { HotelsService } from './hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  hotels: Hotels[];

  data: Array<any>

  constructor(
    private hotelService: HotelsService
  ) { this.data = new Array<any>()}

  ngOnInit(): void {
    this.getHotels()
    
  }

  getHotels() {
    this.hotelService.getHotel().subscribe(
      data => {
        console.log(data)
      }
    )
  }
  

}


