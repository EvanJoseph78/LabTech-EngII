import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TituloDescricaoComponent } from './title/titulo-descricao/titulo-descricao.component';
import { ImagemDescricaoComponent } from './title/imagem-descricao/imagem-descricao.component';
import { LocalidadeComponent } from './title/localidade/localidade.component';

@NgModule({
  declarations: [
    TitleComponent,
    TituloDescricaoComponent,
    ImagemDescricaoComponent,
    LocalidadeComponent,
  ],
  exports: [TitleComponent],
  imports: [CommonModule],
})
export class IndexModule { }
