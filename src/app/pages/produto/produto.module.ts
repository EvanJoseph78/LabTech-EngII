import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoPageComponent } from './produto-page/produto-page.component';

import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [ProdutoPageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class ProdutoModule {}
