import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl = `${environment.apiBaseUrl}/cadastro`;

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
