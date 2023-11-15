import { Component, DoCheck } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements DoCheck {
  nomeProdutoPesquisar: string = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutosService,
  ) { }

  ngDoCheck(): void { }

  carrinhoAtivo: boolean = false;

  abrirCarrinhoDeCompras() {
    this.carrinhoService
      .getEstadoCarrinho()
      .subscribe((estadoCarrinhoComponent) => {
        this.carrinhoAtivo = estadoCarrinhoComponent;
      });
  }

  pesquisarProduto() {
    const valorPesquisa = this.nomeProdutoPesquisar; // Obtém o valor do campo de pesquisa

    this.produtoService.setNomeProdutoPesquisar(valorPesquisa);
  }
}
