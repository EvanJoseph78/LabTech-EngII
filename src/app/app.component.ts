import { Component } from '@angular/core';
import { CarrinhoService } from './shared/service/carrinho.service';
import { LoginService } from './shared/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-ecommerce';

  carrinhoAtivo: boolean = false;

  isLoginPageActive: boolean = false;

  constructor(private carrinhoService: CarrinhoService, private loginService: LoginService) {
    // Inscreve-se para receber notificações sobre mudanças no estado do carrinho
    this.carrinhoService
      .getEstadoCarrinho()
      .subscribe((estadoCarrinhoComponent) => {
        // Atualiza a variável carrinhoAtivo com o novo estado
        this.carrinhoAtivo = estadoCarrinhoComponent;
      });

    this.loginService.getLoginPageState().subscribe((state) => {
      this.isLoginPageActive = state
    })
  }


}
