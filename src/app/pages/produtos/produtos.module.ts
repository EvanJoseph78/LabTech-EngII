import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductPage } from './product-page/product-page.component';
import { CardProdutoComponent } from './product-page/card-produto/card-produto.component';

import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [ProductPage, CardProdutoComponent],
  exports: [ProductPage],
  imports: [CommonModule, AppRoutingModule],
})
export class ProdutosModule {}
