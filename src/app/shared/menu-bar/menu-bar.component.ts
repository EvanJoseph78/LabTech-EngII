import { Component } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  // carrinhoAtivo: boolean = CarrinhoService.carrinhoAtivo;

  constructor(private carrinhoService: CarrinhoService) {
    console.log(carrinhoService.carrinhoAtivo);
  }
  carrinhoAtivo: boolean = this.carrinhoService.carrinhoAtivo;

  abrirCarrinhoDeCompras() {
    this.carrinhoService.abrirCarrinhoDeCompras();
    this.carrinhoAtivo = this.carrinhoService.carrinhoAtivo;
  }
}
