import {
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { OrdemPedido } from '../../models/ordemPedidoModel';
import { Pedido } from '../../models/pedidoModel';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements DoCheck {
  carrinhoAtivo: boolean = false;

  ordemDePedido: OrdemPedido = {
    client_id: 0,
    lista_produtos: [],
    valor_total: 0,
    valor_frete: 0,
  };

  valorSemFrete: number = 0;
  valorMaisFrete: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private elRef: ElementRef,
  ) {
    this.carrinhoService.getListaPedidosProdutos().subscribe((listaPedidos) => {
      this.ordemDePedido = listaPedidos;
    });
  }

  ngDoCheck(): void {
    this.carrinhoService.getValorTotalPedido().subscribe((valorTotal) => {
      this.valorMaisFrete = valorTotal;
      this.valorSemFrete = valorTotal;
    });
  }

  abrirCarrinhoDeCompras() {
    this.carrinhoService
      .getEstadoCarrinho()
      .subscribe((estadoCarrinhoComponent) => {
        this.carrinhoAtivo = estadoCarrinhoComponent;
      });
  }

  finalizarCompra() {
    this.carrinhoService.getListaPedidosProdutos().subscribe((dados) => {
      let novoPedido: Pedido = {
        idcliente: dados.client_id,
        listapedido: [],
        valorfrete: dados.valor_frete,
        valortotalpedido: dados.valor_total,
      };

      dados.lista_produtos.forEach((element) => {
        const aux: any = {
          idproduto: element.produto_id,
          quantidadeproduto: element.quantidade_produto,
          precoproduto: element.preco_produto,
          subtotal: element.subtotal,
        };
        novoPedido.listapedido.push(aux);
      });

      this.carrinhoService.criarPedido(novoPedido).subscribe();
    });
  }
}
