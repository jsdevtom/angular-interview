import { Component, OnInit } from '@angular/core';
import {HotelsService} from "./hotels.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  hotels = this.hotelsService.getHotels();

  constructor(
    private readonly hotelsService: HotelsService,
  ) { }

  ngOnInit(): void {
  }

}
