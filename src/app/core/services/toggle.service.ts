import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

   toggleSubject = new Subject<boolean>();
  constructor() { }

  toggle() {
    this.toggleSubject.next(true);
  }
}
