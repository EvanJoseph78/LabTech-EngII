import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/produtos/card/card.component';

// Onde as rotas são criadas
const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  { path: 'produtos', component: CardComponent, pathMatch: 'prefix' },
  { path: '**', redirectTo: '' }, // redireciona para a rota principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
