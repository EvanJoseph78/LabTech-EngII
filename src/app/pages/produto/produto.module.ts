import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProdutoPageComponent } from './produto-page/produto-page.component';

import { AppRoutingModule } from '../../app-routing.module';
import { ProdutoPageInfoComponent } from './produto-page/produto-page-info/produto-page-info.component';

@NgModule({
  declarations: [ProdutoPageComponent, ProdutoPageInfoComponent],
  exports: [ProdutoPageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class ProdutoModule {}
