import { Component } from '@angular/core';
import { CarrinhoService } from './shared/service/carrinho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-ecommerce';

  carrinhoAtivo: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    // Inscreve-se para receber notificações sobre mudanças no estado do carrinho
    this.carrinhoService
      .getEstadoCarrinho()
      .subscribe((estadoCarrinhoComponent) => {
        // Atualiza a variável carrinhoAtivo com o novo estado
        this.carrinhoAtivo = estadoCarrinhoComponent;
      });
  }
}
