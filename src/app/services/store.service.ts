import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  user$ = new BehaviorSubject([]);
  constructor() {
   }
}
