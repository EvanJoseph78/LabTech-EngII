import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexModule } from './pages/index/index.module';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { ProdutoModule } from './pages/produto/produto.module';
import { RodapeComponent } from './shared/rodape/rodape.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, RodapeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    ProdutosModule,
    ProdutoModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
