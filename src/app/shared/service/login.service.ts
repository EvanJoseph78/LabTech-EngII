import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/login'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  loginCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
