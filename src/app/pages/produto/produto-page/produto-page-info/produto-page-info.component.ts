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
    this.imagemProduto =
      'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg';
  }
}
