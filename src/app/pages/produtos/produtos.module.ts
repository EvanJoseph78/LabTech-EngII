import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductPage } from './product-page/product-page.component';

@NgModule({
  declarations: [ProductPage],
  exports: [ProductPage],
  imports: [CommonModule],
})
export class ProdutosModule {}
