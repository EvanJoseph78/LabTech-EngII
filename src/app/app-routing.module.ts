import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { ProductPage } from './pages/produtos/product-page/product-page.component';
import { ProdutoPageComponent } from './pages/produto/produto-page/produto-page.component';

// Onde as rotas são criadas
const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  {
    path: 'produtos',
    component: ProductPage,
  },
  {
    path: 'produtos/:id',
    component: ProdutoPageComponent,
    pathMatch: 'prefix',
  },
  { path: '**', redirectTo: '' }, // redireciona para a rota principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
