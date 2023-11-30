import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../models/produtos.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  // private apiUrl = 'http://localhost:3200/produtos'; // Substitua pela URL da sua API
  private apiUrl = 'http://localhost:5000/produtos'; // Substitua pela URL da sua API

  private apiUrlAtualizarProduto =
    'http://localhost:5000/admin/atualizar/produto'; // Substitua pela URL da sua API

  private listaProdutos = new BehaviorSubject<Produto[]>([]);

  private nomeProdutoPesquisar = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((dados: any) => {
        // Atualizar a lista de produtos no BehaviorSubject
        this.listaProdutos.next(dados.produtos);
      }),
    );
  }

  atualizarProduto(produto: Produto): Observable<any> {
    return this.http.post(this.apiUrlAtualizarProduto, produto);
  }

  getListaProdutos(): Observable<Produto[]> {
    return this.listaProdutos.asObservable();
  }

  getNomeProdutoPesquisar(): Observable<string> {
    return this.nomeProdutoPesquisar.asObservable();
  }

  setNomeProdutoPesquisar(valorPesquisa: string): void {
    // Emita o valor usando BehaviorSubject para os assinantes
    this.nomeProdutoPesquisar.next(valorPesquisa);
  }

  getEstoqueProduto(id: number): number {
    let quantidade: number = 0;
    const listaProdutos = this.listaProdutos.value;
    listaProdutos.forEach((element) => {
      if (Number(element.idproduto) == id) {
        quantidade = Number(element.quantidade);
      }
    });
    return Number(quantidade);
  }

  getProduto(id: number): Produto {
    let quantidade: number = 0;
    let produto: Produto = {
      nome: '',
      descricao: '',
      idproduto: '',
      peso: '',
      quantidade: 0,
      tamanho: '',
      urlimg: '',
      valor: 0,
      categoria: '',
    };
    const listaProdutos = this.listaProdutos.value;
    listaProdutos.forEach((element) => {
      if (Number(element.idproduto) == id) {
        produto = element;
      }
    });
    return produto;
  }
}
