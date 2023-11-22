import { Component } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email: string = 'evan@gmail.com';
  senha: string = '12345';
  cliente: any = {};
  isLoginInvalido = false;
  isLoginSuccesfull = false;

  constructor(
    private loginService: LoginService,
    private carrinhoService: CarrinhoService,
  ) {}

  loginCliente() {
    this.cliente = {
      email: this.email,
      senha: this.senha,
    };
    this.loginService.loginCliente(this.cliente).subscribe((response) => {
      if (response.mensagem == 'Login bem-sucedido') {
        this.carrinhoService.definirClientId(response.idcliente);
        this.isLoginInvalido = false;
        this.isLoginSuccesfull = true;
      } else {
        this.isLoginInvalido = true;
        this.isLoginSuccesfull = false;
      }
    });
  }
}
