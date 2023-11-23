import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoCardComponent } from './carrinho/produto-card/produto-card.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [CarrinhoComponent, ProdutoCardComponent],
  exports: [CarrinhoComponent],
  imports: [CommonModule, RouterLink],
})
export class CarrinhoModule { }
