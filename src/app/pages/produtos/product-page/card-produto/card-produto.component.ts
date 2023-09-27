import { Component } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent {
  produtoId: number = 5;
  produtoNome: string = 'Meia Coto Algodão Prothetic Sock';
  produtoPreco: number = 163.02;
  imagemProduto: string =
    'https://acdn.mitiendanube.com/stores/001/097/946/products/articulacao-protetica-de-joelho-3r80-11-3d30f02f26fa2ffb9d15844040244923-320-0.webp';
  parcelaProduto: number = 0;
  precoProdutoParcelado: string = '0';

  constructor() {
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
}
