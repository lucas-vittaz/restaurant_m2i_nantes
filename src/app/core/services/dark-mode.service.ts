import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  public dark$: BehaviorSubject<boolean>;

  constructor() {
    this.dark$ = new BehaviorSubject(false);
  }

  public toggle(): void {
    console.log('value: ' + this.dark$.value);
    this.dark$.next(!this.dark$.value);
    console.log('value: ' + this.dark$.value);
  }
}
