import { Component } from '@angular/core';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  listaProdutosSaida: any = [];
  listaProdutoEstoque: any = [];
  inicioAtivo: boolean = false;
  cadastroAtivo: boolean = true;
  movimentacaoAtivo: boolean = false;
  estoqueAtivo: boolean = false;

  constructor(private movimentacaoService: MovimentacaoService) {
    // this.listaProdutosSaida = movimentacaoService.listaSaidaProdutos;
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
        this.movimentacaoService.getMovimentacaoSaida().subscribe((dados) => {
          this.listaProdutosSaida = dados.movimentacao_saida;
          // console.log(this.listaProdutosSaida);
        });
        this.movimentacaoAtivo = true;
        break;
      case 'estoque':
        this.movimentacaoService.getEstoqueProdutos().subscribe((dados) => {
          this.listaProdutoEstoque = dados.estoque_produtos;
          console.log(this.listaProdutoEstoque);
        });
        this.estoqueAtivo = true;
        break;
      default:
        break;
    }
  }

  mostrarId(produtoid: string) {
    console.log(produtoid);
  }
}
