import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Produto } from '../models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class MovimentacaoService {
  private apiUrlMovimentacao = 'http://localhost:5000/admin/movimentacao/saida';
  private apiUrlEstoque = 'http://localhost:5000/admin/estoque';
  private apiUrlNovoProduto = 'http://localhost:5000/admin/adicionar/produto';

  constructor(private http: HttpClient) { }

  getMovimentacaoSaida(): Observable<any> {
    return this.http.get(this.apiUrlMovimentacao).pipe(
      tap((dados: any) => {
        // this.listaSaidaProdutos1 = dados.movimentacao_saida;
      }),
    );
  }

  getEstoqueProdutos(): Observable<any> {
    return this.http.get(this.apiUrlEstoque);
  }

  adicionarProduto(produto: Produto): Observable<any> {
    return this.http.post(this.apiUrlNovoProduto, produto);
  }
}
