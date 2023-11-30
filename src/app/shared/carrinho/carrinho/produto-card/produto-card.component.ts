import { Component, DoCheck, Input } from '@angular/core';
import { Produto } from 'src/app/shared/models/produtos.model';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';
import { ProdutosService } from 'src/app/shared/service/produtos.service';

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
  quantidade_produto_estoque: number = 0;
  listaProdutos: Produto[] = [];

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutosService,
  ) {
    this.preco_produto = Number(this.preco_produto.toFixed(2));
    this.produtoService.getListaProdutos().subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos;
    });
  }

  ngDoCheck(): void { }

  definirQuantidadeProduto(acao: string) {
    this.carrinhoService.getListaPedidosProdutos().subscribe((listaPedidos) => {
      for (let index = 0; index < listaPedidos.lista_produtos.length; index++) {
        const element = listaPedidos.lista_produtos[index];
        if (element.produto_id == this.produto_id) {
          this.quantidade_produto_estoque =
            this.produtoService.getEstoqueProduto(this.produto_id);

          if (
            acao == 'aumentar' &&
            !(
              listaPedidos.lista_produtos[index].quantidade_produto >=
              this.quantidade_produto_estoque
            )
          ) {
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
      }
    });
  }

  removerProduto() {
    this.carrinhoService
      .getListaPedidosProdutos()
      .subscribe((listaProdutos) => {
        for (
          let index = 0;
          index < listaProdutos.lista_produtos.length;
          index++
        ) {
          const element = listaProdutos.lista_produtos[index];
          if (element.produto_id == this.produto_id) {
            listaProdutos.lista_produtos = listaProdutos.lista_produtos
              .slice(0, index)
              .concat(listaProdutos.lista_produtos.slice(index + 1));
          }
        }
      });
  }
}
