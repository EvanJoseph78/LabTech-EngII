import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto-page-info',
  templateUrl: './produto-page-info.component.html',
  styleUrls: ['./produto-page-info.component.css'],
})
export class ProdutoPageInfoComponent {
  @Input()
  nomeProduto: string = '';
  @Input()
  precoProduto: string = '';
  @Input()
  imagemProduto: string = '';

  tamanhoProduto: string = 'P';
  quantidade: number = 1;
  quantidadeDisponivel: number = 10;

  constructor() { }

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
}
