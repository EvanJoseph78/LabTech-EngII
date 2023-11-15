import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProtesesPage } from './product-page/product-page.component';
import { CardProdutoComponent } from './product-page/card-produto/card-produto.component';

import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [ProtesesPage, CardProdutoComponent],
  exports: [ProtesesPage],
  imports: [CommonModule, AppRoutingModule],
})
export class ProtesesPageModule {}
