import { Component, DoCheck } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { OrdemPedido } from '../../models/ordemPedidoModel';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements DoCheck {
  carrinhoAtivo: boolean = true;

  ordemDePedido: OrdemPedido = {
    client_id: 0,
    lista_produtos: [],
    valor_total: 0,
  };

  valorSemFrete: number = 0;
  valorMaisFrete: number = 0;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.getValorTotalPedido().subscribe((valorTotal) => {
      this.ordemDePedido.valor_total = valorTotal;
    });
  }

  ngDoCheck(): void {
    this.carrinhoService.getListaPedidosProdutos().subscribe((listaPedidos) => {
      this.ordemDePedido = listaPedidos;
    });
    this.carrinhoService.getValorTotalPedido().subscribe((valorToal) => {
      this.valorMaisFrete = valorToal + 10;
      this.valorSemFrete = valorToal;
    });
  }

  abrirCarrinhoDeCompras() {
    this.carrinhoService
      .getEstadoCarrinho()
      .subscribe((estadoCarrinhoComponent) => {
        this.carrinhoAtivo = estadoCarrinhoComponent;
      });
  }
}
