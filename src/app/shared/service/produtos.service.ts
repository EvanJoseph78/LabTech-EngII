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
}
