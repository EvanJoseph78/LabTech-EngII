import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { CadastroService } from 'src/app/shared/service/cadastro.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  nome: string = '';
  sobrenome: string = '';
  cpf: string = '162.175.633-55';
  cep: string = '';
  email: string = '';
  senha1: string = '';
  senha2: string = '';
  nomeValido: boolean = true;
  sobrenomeValido: boolean = true;
  cpfValido: boolean = true;
  cepValido: boolean = true;
  emailValido: boolean = true;
  senhaValida: boolean = true;
  senhaLonga: boolean = true;
  cliente: Cliente = {
    nome: '',
    cpf: '',
    cep: '',
    email: '',
    senha: '',
  };

  constructor(private cadastroService: CadastroService) { }

  criarConta() {
    this.nomeValido = this.validaNome();
    this.sobrenomeValido = this.validaSobrenome();
    this.cpfValido = this.validaCPF(this.cpf);
    this.cepValido = this.validaCEP(this.cep);
    this.emailValido = this.validaEmail(this.email);
    this.senhaValida = this.validaSenha();
    this.senhaLonga = this.senhaCurta();
    if (
      this.emailValido &&
      this.cepValido &&
      this.cpfValido &&
      this.senhaValida &&
      this.senhaLonga &&
      this.nomeValido &&
      this.sobrenomeValido
    ) {
      this.cliente = {
        nome: this.nome + this.sobrenome,
        cpf: this.cpf,
        cep: this.cep,
        email: this.email,
        senha: this.senha1,
      };
      console.log('Conta cadastrada com sucesso');
      this.cadastroService
        .cadastrarCliente(this.cliente)
        .subscribe((cliente) => {
          console.log(cliente);
        });
    } else {
      console.log(this.cliente);
      console.log('Algo deu Errado');
    }
  }

  validaNome() {
    if (this.nome == '') {
      return false;
    }
    return true;
  }

  validaSobrenome() {
    if (this.sobrenome == '') {
      return false;
    }
    return true;
  }

  validaSenha() {
    return this.senha1 == this.senha2;
  }

  senhaCurta() {
    if (this.senha1.length < 5 || this.senha2.length < 5) {
      return false;
    }
    return true;
  }

  validaCPF(cpf: string): boolean {
    // Remove caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    const digito1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Verifica se o primeiro dígito verificador está correto
    if (digito1 !== parseInt(cpf.charAt(9))) {
      return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    const digito2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Verifica se o segundo dígito verificador está correto
    if (digito2 !== parseInt(cpf.charAt(10))) {
      return false;
    }

    // Se todas as verificações passaram, o CPF é válido
    return true;
  }

  validaCEP(cep: string): boolean {
    // Remove caracteres não numéricos do CEP
    cep = cep.replace(/\D/g, '');

    // Verifica se o CEP tem 8 dígitos
    if (cep.length !== 8) {
      return false;
    }

    // Retorna true se todas as verificações passaram
    return true;
  }

  validaEmail(email: string): boolean {
    // Expressão regular para validar o formato básico do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Retorna true se o e-mail corresponde à expressão regular
    return regex.test(email);
  }
}
