import { Component, DoCheck, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produto } from 'src/app/shared/models/produtos.model';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';
import { ProdutosService } from 'src/app/shared/service/produtos.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-produto-page-info',
  templateUrl: './produto-page-info.component.html',
  styleUrls: ['./produto-page-info.component.css'],
})
export class ProdutoPageInfoComponent implements DoCheck {
  @Input()
  nomeProduto: string = '';
  @Input()
  precoProduto: string = '';
  @Input()
  imagemProduto: string = '';
  descricaoProduto: string = '';

  private id: string | null = '0';

  produto: Produto = {
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

  tamanhoProduto: string = 'P';
  quantidade: number = 1;
  quantidadeDisponivel: number = 1;
  carrinhoAtivo: boolean = false;
  novoProduto: Object = {};

  constructor(
    private carrinhoService: CarrinhoService,
    private parametrizador: ActivatedRoute,
    private produtoService: ProdutosService,
  ) {
    this.parametrizador.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.produtoService.getProducts().subscribe((dados) => {
      for (let index = 0; index < dados.produtos.length; index++) {
        const element = dados.produtos[index];
        if (element.idproduto == this.id) {
          this.produto = element;
        }
      }
    });
  }

  ngDoCheck(): void {
    this.quantidadeDisponivel = this.produtoService.getEstoqueProduto(
      Number(this.id),
    );
  }

  carregarImagemPadrao() {
    this.imagemProduto = '../../../assets/images/notFound.jpg';
  }

  definirTamanhoProduto(tamanhoProduto: string) {
    if (tamanhoProduto == 'P') {
      this.tamanhoProduto = 'P';
    }

    if (tamanhoProduto == 'M') {
      this.tamanhoProduto = 'M';
    }

    if (tamanhoProduto == 'L') {
      this.tamanhoProduto = 'L';
    }
  }

  aumentarQuantidade() {
    if (this.quantidade < this.quantidadeDisponivel) {
      this.quantidade = this.quantidade + 1;
    }
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade = this.quantidade - 1;
    }
  }

  abrirCarrinhoDeCompras() {
    if (this.carrinhoAtivo) {
    } else {
      this.adicionarProduto();
      this.carrinhoService
        .getEstadoCarrinho()
        .subscribe((estadoCarrinhoComponent) => {
          this.carrinhoAtivo = estadoCarrinhoComponent;
        });
    }
  }

  adicionarProduto() {
    this.carrinhoService.getListaPedidosProdutos().subscribe((listaPedidos) => {
      listaPedidos.valor_frete = 10;
      // console.log(listaPedidos);
      this.isProdutoNaLista().subscribe((isProdutoNaLista) => {
        if (isProdutoNaLista) {
          for (
            let index = 0;
            index < listaPedidos.lista_produtos.length;
            index++
          ) {
            const element = listaPedidos.lista_produtos[index];
            if ((element.produto_id = Number(this.id))) {
              let soma = element.quantidade_produto + this.quantidade;
              if (soma > this.quantidadeDisponivel) {
                console.log('Quantidade indisponivel');
                element.quantidade_produto = this.quantidadeDisponivel;
              } else {
                element.quantidade_produto = soma;
              }

              element.subtotal =
                element.quantidade_produto * this.produto.valor;
              listaPedidos.valor_total =
                listaPedidos.valor_total + element.subtotal;
            }
          }
        } else {
          listaPedidos.lista_produtos.push({
            produto_id: Number(this.produto.idproduto),
            nome_produto: this.produto.nome,
            quantidade_produto: this.quantidade,
            imagem_produto: this.produto.urlimg,
            subtotal: this.produto.valor * this.quantidade,
            tamanho_produto: this.tamanhoProduto,
            preco_produto: this.produto.valor,
          });
        }
      });
    });
  }

  isProdutoNaLista(): Observable<boolean> {
    if (this.id == null) {
      return of(false);
    } else {
      return this.carrinhoService.getListaPedidosProdutos().pipe(
        map((listaPedidos: any) => {
          return listaPedidos.lista_produtos.some(
            (element: any) => element.produto_id === Number(this.id),
          );
        }),
      );
    }
  }
}
