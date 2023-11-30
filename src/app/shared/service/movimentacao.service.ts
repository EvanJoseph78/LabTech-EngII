import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Produto } from '../models/produtos.model';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class MovimentacaoService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) { }

  getMovimentacaoSaida(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/movimentacao/saida`);
  }

  getEstoqueProdutos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/estoque`);
  }

  adicionarProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/adicionar/produto`, produto);
  }
}
