import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  nome: string = 'nome';
  sobrenome: string = 'sobrenome';
  cpf: string = 'cpf';
  cep: string = 'cep';
  email: string = 'email';
  senha1: string = 'senha1';
  senha2: string = 'senha2';
  cpfValido: boolean = true;
  cepValido: boolean = true;
  emailValido: boolean = true;
  senhaValida: boolean = true;

  criarConta() {
    this.cpfValido = this.validaCPF(this.cpf);
    this.cepValido = this.validaCEP(this.cep);
    this.emailValido = this.validaEmail(this.email);
    this.senhaValida = this.validaSenha();
    console.log(this.cpfValido);
    console.log(this.senhaValida);
    console.log(this.cepValido);
    console.log(this.emailValido);
  }

  validaSenha() {
    return this.senha1 == this.senha2;
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
