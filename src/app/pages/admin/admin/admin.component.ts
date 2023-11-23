import { Component } from '@angular/core';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  listaProdutosSaida: any = [];
  inicioAtivo: boolean = true;
  cadastroAtivo: boolean = false;
  movimentacaoAtivo: boolean = false;
  estoqueAtivo: boolean = false;

  constructor(private movimentacaoService: MovimentacaoService) {
    this.listaProdutosSaida = movimentacaoService.listaSaidaProdutos;
    // console.log(this.listaProdutosSaida);
    this.movimentacaoService.getMovimentacaoSaida().subscribe((dados) => {
      console.log(dados.movimentacao_saida);
      this.listaProdutosSaida = dados.movimentacao_saida;
    });
  }

  mudarAba(aba: string) {
    this.movimentacaoAtivo = false;
    this.inicioAtivo = false;
    this.cadastroAtivo = false;
    this.estoqueAtivo = false;

    switch (aba) {
      case 'inicio':
        this.inicioAtivo = true;
        break;
      case 'cadastro':
        this.cadastroAtivo = true;
        break;
      case 'movimentacao':
        this.movimentacaoAtivo = true;
        break;
      case 'estoque':
        this.estoqueAtivo = true;
        break;
      default:
        break;
    }
  }
}
