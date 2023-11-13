import { Component, DoCheck, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css'],
})
export class ProdutoCardComponent implements DoCheck {
  @Input()
  srcImagem: string = '';
  @Input()
  produto_id: number = 0;
  @Input()
  nome_produto: string = '';
  @Input()
  quantidade_produto: number = 0;
  @Input()
  subtotal: number = 0;
  @Input()
  tamanho_produto: string = '';
  @Input()
  preco_produto: number = 0;

  constructor(private carrinhoService: CarrinhoService) {
    this.preco_produto = Number(this.preco_produto.toFixed(2));
  }

  ngDoCheck(): void { }

  definirQuantidadeProduto(acao: string) {
    this.carrinhoService.getListaPedidosProdutos().subscribe((listaPedidos) => {
      var somaValorTotal = 0;
      for (let index = 0; index < listaPedidos.lista_produtos.length; index++) {
        const element = listaPedidos.lista_produtos[index];
        if (element.produto_id == this.produto_id) {
          if (acao == 'aumentar') {
            listaPedidos.lista_produtos[index].quantidade_produto =
              listaPedidos.lista_produtos[index].quantidade_produto + 1;
          } else if (acao == 'diminuir') {
            if (listaPedidos.lista_produtos[index].quantidade_produto == 1) {
            } else {
              listaPedidos.lista_produtos[index].quantidade_produto =
                listaPedidos.lista_produtos[index].quantidade_produto - 1;
            }
          }
          listaPedidos.lista_produtos[index].subtotal =
            listaPedidos.lista_produtos[index].preco_produto *
            listaPedidos.lista_produtos[index].quantidade_produto;
        }
        // somaValorTotal = somaValorTotal + element.subtotal;
      }

      this.carrinhoService.getValorTotalPedido().subscribe((valorTotal) => {
        console.log(valorTotal);
        // this.subtotal = valorTotal;
      });
      // this.carrinhoService
      //   .getValorTotalPedido()
      //   .subscribe((valorTotal) => console.log(valorTotal));

      // listaPedidos.valor_total = somaValorTotal;
    });
  }

  removerProduto() {
    this.carrinhoService
      .getListaPedidosProdutos()
      .subscribe((listaProdutos) => {
        console.log(this.produto_id);
        for (
          let index = 0;
          index < listaProdutos.lista_produtos.length;
          index++
        ) {
          const element = listaProdutos.lista_produtos[index];
          if (element.produto_id == this.produto_id) {
            console.log('Evandro José' + index);
            listaProdutos.lista_produtos = listaProdutos.lista_produtos
              .slice(0, index)
              .concat(listaProdutos.lista_produtos.slice(index + 1));
          }
        }
      });
  }
}
