import { Component, DoCheck } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { OrdemPedido } from '../../models/ordemPedidoModel';
import { Pedido } from '../../models/pedidoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements DoCheck {
  carrinhoAtivo: boolean = false;
  isUserLogado: boolean = true;
  compraFinalizada: boolean = false;
  carrinhoVazio: boolean = false;

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
    private router: Router,
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
          // precoproduto: element.preco_produto,
          subtotal: element.subtotal,
        };
        novoPedido.listapedido.push(aux);
      });

      if (this.carrinhoService.getClientId() > 0) {
        // verifica se o carrinho está vazio
        if (this.ordemDePedido.lista_produtos.length == 0) {
          this.carrinhoVazio = true;
        } else {
          this.carrinhoVazio = false;
          this.carrinhoService.criarPedido(novoPedido).subscribe((res) => {
            console.log(res);
          });
          this.compraFinalizada = true;
        }
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 1000);
      } else {
        this.isUserLogado = false;
        setTimeout(() => {
          this.carrinhoService.getEstadoCarrinho();
          this.router.navigate(['/login']);
        }, 1000);
      }

      if (this.isUserLogado && this.compraFinalizada) {
        setTimeout(() => {
          this.ordemDePedido.lista_produtos = [];
          this.carrinhoService.getEstadoCarrinho();
        }, 1000);
      }
    });
  }
}
