import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto-page-info',
  templateUrl: './produto-page-info.component.html',
  styleUrls: ['./produto-page-info.component.css'],
})
export class ProdutoPageInfoComponent {
  @Input()
  nomeProduto: string = '';
  @Input()
  precoProduto: string = '';
  @Input()
  imagemProduto: string = '';

  carregarImagemPadrao() {
    console.log('Evandroo');
    this.imagemProduto = '../../../assets/images/notFound.jpg';
  }
}
