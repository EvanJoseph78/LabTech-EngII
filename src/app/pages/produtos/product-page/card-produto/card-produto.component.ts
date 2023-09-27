import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent {
  @Input()
  produtoId: number = 0;
  @Input()
  produtoNome: string = '';
  @Input()
  produtoPreco: number = 1;
  @Input()
  imagemProduto: string = '';
  parcelaProduto: number = 0;
  precoProdutoParcelado: string = '0';

  constructor() {
    
  }

  ngOnChanges() {
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
