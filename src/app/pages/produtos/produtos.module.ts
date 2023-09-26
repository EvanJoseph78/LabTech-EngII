import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductPage } from './product-page/product-page.component';
import { CardProdutoComponent } from './product-page/card-produto/card-produto.component';

@NgModule({
  declarations: [ProductPage, CardProdutoComponent],
  exports: [ProductPage],
  imports: [CommonModule],
})
export class ProdutosModule {}
