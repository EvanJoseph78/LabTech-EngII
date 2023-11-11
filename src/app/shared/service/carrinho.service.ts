import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  carrinhoAtivo: boolean = true;

  constructor() { }

  abrirCarrinhoDeCompras() {
    if (this.carrinhoAtivo) {
      console.log('testes');
      this.carrinhoAtivo = false;
    } else {
      this.carrinhoAtivo = true;
    }
  }
}
