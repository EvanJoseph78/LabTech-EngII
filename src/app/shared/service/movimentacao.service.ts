import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovimentacaoService {
  private apiUrlMovimentacao = 'http://localhost:5000/admin/movimentacao/saida';
  private apiUrlEstoque = 'http://localhost:5000/admin/estoque';

  constructor(private http: HttpClient) { }
  listaSaidaProdutos1: any = [];

  getMovimentacaoSaida(): Observable<any> {
    return this.http.get(this.apiUrlMovimentacao).pipe(
      tap((dados: any) => {
        this.listaSaidaProdutos1 = dados.movimentacao_saida;
        // console.log(this.listaSaidaProdutos1);
      }),
    );
  }

  getEstoqueProdutos(): Observable<any> {
    return this.http.get(this.apiUrlEstoque);
  }

  listaSaidaProdutos: any = [
    {
      data: '10-10-10',
      classificacao: 'protese',
      nome: 'Braço robótico',
      quantidade: 2,
      custoUnitario: 10,
    },
    {
      data: '10-10-10',
      classificacao: 'protese',
      nome: 'Perna robótica',
      quantidade: 6,
      custoUnitario: 10,
    },
    {
      data: '10-10-11',
      classificacao: 'protese',
      nome: 'Perna robótica',
      quantidade: 6,
      custoUnitario: 10,
    },
    {
      data: '10-10-12',
      classificacao: 'eletronico',
      nome: 'Smartphone',
      quantidade: 10,
      custoUnitario: 300,
    },
  ];
}
