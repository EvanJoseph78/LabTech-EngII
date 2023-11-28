import { Component } from '@angular/core';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';
import { ProdutosService } from 'src/app/shared/service/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  listaProdutosSaida: any = [];
  listaProdutoEstoque: any = [];
  inicioAtivo: boolean = false;
  cadastroAtivo: boolean = true;
  movimentacaoAtivo: boolean = false;
  estoqueAtivo: boolean = false;
  atualizarProdutoAtivo: boolean = false;
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

  constructor(
    private movimentacaoService: MovimentacaoService,
    private produtoService: ProdutosService,
  ) {
    // this.listaProdutosSaida = movimentacaoService.listaSaidaProdutos;
  }

  mudarAba(aba: string) {
    this.movimentacaoAtivo = false;
    this.inicioAtivo = false;
    this.cadastroAtivo = false;
    this.estoqueAtivo = false;

    switch (aba) {
      case 'inicio':
        this.inicioAtivo = true;
        this.atualizarProdutoAtivo = false;
        break;
      case 'cadastro':
        this.cadastroAtivo = true;
        this.atualizarProdutoAtivo = false;
        break;
      case 'movimentacao':
        this.movimentacaoService.getMovimentacaoSaida().subscribe((dados) => {
          this.listaProdutosSaida = dados.movimentacao_saida;
          // console.log(this.listaProdutosSaida);
        });
        this.movimentacaoAtivo = true;
        this.atualizarProdutoAtivo = false;
        break;
      case 'estoque':
        this.movimentacaoService.getEstoqueProdutos().subscribe((dados) => {
          this.listaProdutoEstoque = dados.estoque_produtos;
          console.log(this.listaProdutoEstoque);
        });
        this.estoqueAtivo = true;
        this.atualizarProdutoAtivo = false;

        this.produtoService.getListaProdutos().subscribe();
        break;
      default:
        break;
    }
  }

  editarProduto(produtoid: string) {
    this.produtoService.getProducts().subscribe((dados) => {
      const listaProdutos = dados.produtos;
      for (let index = 0; index < listaProdutos.length; index++) {
        const element = listaProdutos[index];
        if (element.idproduto == produtoid) {
          this.produto = element;
          this.estoqueAtivo = false;
          this.atualizarProdutoAtivo = true;
        }
      }
    });
  }
}
