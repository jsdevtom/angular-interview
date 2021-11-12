import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  getHotels() {
    return of([
      {
        name: 'Robinson Club',
      },
      {
        name: 'La Palma'
      }
    ])
  }
}
