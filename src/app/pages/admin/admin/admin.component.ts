import { Component } from '@angular/core';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  listaProdutosSaida: any = [];

  constructor(private movimentacaoService: MovimentacaoService) {
    this.listaProdutosSaida = movimentacaoService.listaSaidaProdutos;
    console.log(this.listaProdutosSaida);
  }
}
