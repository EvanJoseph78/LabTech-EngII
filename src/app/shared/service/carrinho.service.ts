import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdemPedido } from '../models/ordemPedidoModel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  // Cria um BehaviorSubject para rastrear o estado do carrinho
  private carrinhoAtivoSubject = new BehaviorSubject<boolean>(true);

  listaPedidos = new BehaviorSubject<OrdemPedido>({
    client_id: 0,
    lista_produtos: [],
    valor_total: 0,
    valor_frete: 0,
  });

  listaPedidosProdutos: Observable<OrdemPedido> =
    this.listaPedidos.asObservable();

  // Declara uma propriedade carrinhoAtivo do tipo Observable que os componentes podem assinar
  carrinhoAtivo: Observable<boolean> = this.carrinhoAtivoSubject.asObservable();

  constructor() { }

  /**
   * Método para obter o estado atual do carrinho e alternar seu valor.
   * @returns Um Observable que emite o estado atual do carrinho.
   */
  getEstadoCarrinho(): Observable<boolean> {
    // Alterna o valor do BehaviorSubject
    if (this.carrinhoAtivoSubject.value) {
      this.carrinhoAtivoSubject.next(false);
    } else {
      this.carrinhoAtivoSubject.next(true);
    }

    // Retorna o Observable associado ao BehaviorSubject
    return this.carrinhoAtivoSubject.asObservable();
  }

  getListaPedidosProdutos(): Observable<OrdemPedido> {
    return this.listaPedidos.asObservable();
  }

  getValorTotalPedido(): Observable<number> {
    return this.listaPedidos.pipe(
      map((valor) => {
        let soma = 0;
        valor.lista_produtos.forEach((element) => {
          soma = soma + element.subtotal;
        });
        this.getListaPedidosProdutos().subscribe((listaProdutos) => {
          if (listaProdutos.lista_produtos.length == 0) {
            listaProdutos.valor_total = 0;
          } else {
            listaProdutos.valor_total = soma + listaProdutos.valor_frete;
          }
        });
        return soma;
      }),
    );
  }
}
