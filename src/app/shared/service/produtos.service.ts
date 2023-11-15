import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../models/produtos.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private apiUrl = 'http://localhost:3200/produtos'; // Substitua pela URL da sua API

  private listaProdutos = new BehaviorSubject<Produto[]>([]);

  private nomeProdutoPesquisar = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    // console.log(this.listaProdutos);
    return this.http.get(this.apiUrl).pipe(
      tap((dados: any) => {
        // Atualizar a lista de produtos no BehaviorSubject
        this.listaProdutos.next(dados.produtos);
      }),
    );
  }

  getListaProdutos(): Observable<Produto[]> {
    return this.listaProdutos.asObservable();
  }

  getNomeProdutoPesquisar(): Observable<string> {
    return this.nomeProdutoPesquisar.asObservable();
  }

  setNomeProdutoPesquisar(valorPesquisa: string): void {
    // Faça algo com o valorPesquisa, se necessário
    // console.log('Produto pesquisado no serviço: ', valorPesquisa);

    // Emita o valor usando BehaviorSubject para os assinantes
    this.nomeProdutoPesquisar.next(valorPesquisa);
  }
}
