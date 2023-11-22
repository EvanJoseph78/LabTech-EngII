import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginPageState = new BehaviorSubject<boolean>(true);

  private apiUrl = 'http://localhost:5000/login'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  loginCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

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
}
