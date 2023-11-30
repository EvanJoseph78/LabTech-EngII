import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = `${environment.apiBaseUrl}/login`;

  constructor(private http: HttpClient) { }

  loginCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
