import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexModule } from './pages/index/index.module';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent],
  imports: [BrowserModule, AppRoutingModule, IndexModule, ProdutosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
