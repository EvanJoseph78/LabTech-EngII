import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
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
  precoProdutoParcelado: string = '0';

  constructor() {
    // console.log(this.imagemProduto);
  }

  ngOnChanges() {
    console.log(this.imagemProduto);
    if (this.produtoPreco <= 100) {
      this.parcelaProduto = Math.floor(this.produtoPreco / 10);
    } else {
      this.parcelaProduto = 10;
    }

    const precoParcelado = this.produtoPreco / this.parcelaProduto;
    this.precoProdutoParcelado = precoParcelado.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  carregarImagemPadrao() {
    console.log('Evandroo');
    this.imagemProduto =
      'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg';
  }
}
