import { Component, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css'],
})
export class ProdutoCardComponent {
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
  listaPedidos: object = {};

  constructor() {
    this.subtotal = Number(this.subtotal.toFixed(2));
    this.preco_produto = Number(this.preco_produto.toFixed(2));
  }
}
