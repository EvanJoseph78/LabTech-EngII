import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoCardComponent } from './carrinho/produto-card/produto-card.component';

@NgModule({
  declarations: [CarrinhoComponent, ProdutoCardComponent],
  exports: [CarrinhoComponent],
  imports: [CommonModule],
})
export class CarrinhoModule { }
