import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginPageState = new BehaviorSubject<boolean>(true);

  getLoginPageState(): Observable<boolean> {
    return this.loginPageState.asObservable();
  }

  setLoginPageState(): void {
    if (this.loginPageState.value) {
      this.loginPageState.next(false);
    } else {
      this.loginPageState.next(true);
    }

  }

  constructor() { }
}
