import { Component, DoCheck } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutosService } from '../service/produtos.service';
import { LoginService } from '../service/login.service';

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
    private loginService: LoginService
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

  limparPesquisa() {
    if (this.carrinhoService.isCarrinhoAtivo()) {
      this.carrinhoService.getEstadoCarrinho();
    }
    this.produtoService.setNomeProdutoPesquisar('');
  }

  abrirPaginaLogin() {
    this.loginService.setLoginPageState();

  }

}
