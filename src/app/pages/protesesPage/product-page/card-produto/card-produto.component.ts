import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto-proteses',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent {
  @Input()
  produtoId: string = '';
  @Input()
  produtoNome: string = '';
  @Input()
  produtoPreco: number = 1;
  @Input()
  imagemProduto: string = '';
  parcelaProduto: number = 0;
  precoProdutoParcelado: number = 0;

  constructor() { }

  ngOnChanges() {
    if (this.produtoPreco <= 100) {
      this.parcelaProduto = Math.floor(this.produtoPreco / 10);
    } else {
      this.parcelaProduto = 10;
    }

    this.precoProdutoParcelado = this.produtoPreco / this.parcelaProduto;
  }

  carregarImagemPadrao() {
    this.imagemProduto = '../../../assets/images/notFound.jpg';
  }
}
