import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl = 'http://localhost:5000/cadastro'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
